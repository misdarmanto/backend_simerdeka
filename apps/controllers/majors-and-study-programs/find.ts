import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { Op } from "sequelize";
import { Pagination } from "../../utilities/pagination";
import { requestChecker } from "../../utilities/requestCheker";
import { ListOfMajorModel } from "../../models/list-of-major";
import {
	ListOfStudyModelProgram,
	ListOfStudyProgramAttributes,
} from "../../models/list-study-program";

export const findAll = async (req: any, res: Response) => {
	try {
		const page = new Pagination(+req.query.page || 0, +req.query.size || 10);
		const result = await ListOfMajorModel.findAndCountAll({
			where: {
				deleted: { [Op.eq]: 0 },
				...(req.query.search && {
					[Op.or]: [{ major_name: { [Op.like]: `%${req.query.search}%` } }],
				}),
			},
			order: [["id", "desc"]],
			...(req.query.pagination == "true" && {
				limit: page.limit,
				offset: page.offset,
			}),

			include: [ListOfStudyModelProgram],
		});

		const response = <ResponseDataAttributes>ResponseData.default;
		response.data = page.data(result);
		return res.status(StatusCodes.OK).json(response);
	} catch (error: any) {
		console.log(error.message);
		const message = `unable to process request! error ${error.message}`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};

export const findAllMajor = async (req: any, res: Response) => {
	try {
		const allJurusan = await ListOfMajorModel.findAll({
			where: {
				deleted: { [Op.eq]: 0 },
			},
		});
		const response = <ResponseDataAttributes>ResponseData.default;
		response.data = allJurusan;
		return res.status(StatusCodes.OK).json(response);
	} catch (error: any) {
		console.log(error.message);
		const message = `unable to process request! error ${error.message}`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};

export const findAllStudyProgram = async (req: any, res: Response) => {
	const query = <ListOfStudyProgramAttributes>req.query;
	const emptyField = requestChecker({
		requireList: ["major_id"],
		requestData: query,
	});

	if (emptyField) {
		const message = `invalid request parameter! require (${emptyField})`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.BAD_REQUEST).json(response);
	}
	try {
		const studyPrograms = await ListOfStudyModelProgram.findAll({
			where: {
				deleted: { [Op.eq]: 0 },
				major_id: query.major_id,
			},
		});
		const response = <ResponseDataAttributes>ResponseData.default;
		response.data = studyPrograms;
		return res.status(StatusCodes.OK).json(response);
	} catch (error: any) {
		console.log(error.message);
		const message = `unable to process request! error ${error.message}`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};
