import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { Op } from "sequelize";
import { Pagination } from "../../utilities/pagination";
import { requestChecker } from "../../utilities/requestCheker";
import { SemesterModel } from "../../models/semester";
import { ListOfMajorModel } from "../../models/list-of-major";
import {
	ProgramForMajorAttributes,
	ProgramForMajorModel,
} from "../../models/program-for-major";
import { ListOfStudyModel } from "../../models/list-study-program";

export const findAll = async (req: any, res: Response) => {
	// const headers = <ProgramForMajorAttributes>req.headers;

	// const emptyField = requestChecker({
	// 	requireList: ["x-user-id"],
	// 	requestData: req.headers,
	// });

	// if (emptyField) {
	// 	const message = `invalid request parameter! require (${emptyField})`;
	// 	const response = <ResponseDataAttributes>ResponseData.error(message);
	// 	return res.status(StatusCodes.BAD_REQUEST).json(response);
	// }

	try {
		const page = new Pagination(+req.query.page || 0, +req.query.size || 10);
		const result = await ProgramForMajorModel.findAndCountAll({
			where: {
				deleted: { [Op.eq]: 0 },
				...(req.query.search && {
					[Op.or]: [{ program_name: { [Op.like]: `%${req.query.search}%` } }],
				}),
				major_id: { [Op.eq]: req.header("x-major-id") },
			},
			order: [["id", "desc"]],
			...(req.query.pagination == "true" && {
				limit: page.limit,
				offset: page.offset,
			}),
			include: [SemesterModel, ListOfMajorModel, ListOfStudyModel],
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

export const findOne = async (req: any, res: Response) => {
	const params = <ProgramForMajorAttributes>req.params;

	const emptyField = requestChecker({
		requireList: ["id"],
		requestData: req.params,
	});

	if (emptyField) {
		const message = `invalid request parameter! require (${emptyField})`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.BAD_REQUEST).json(response);
	}

	try {
		const ProgramForMajorChek = await ProgramForMajorModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				program_major_id: { [Op.eq]: params.id },
			},
		});

		if (!ProgramForMajorChek) {
			const message = `not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		const response = <ResponseDataAttributes>ResponseData.default;
		response.data = ProgramForMajorChek;
		return res.status(StatusCodes.OK).json(response);
	} catch (error: any) {
		console.log(error.message);
		const message = `unable to process request! error ${error.message}`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};
