import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { Op } from "sequelize";
import { Pagination } from "../../utilities/pagination";
import { requestChecker } from "../../utilities/requestCheker";
import { SemesterAttributes, SemesterModel } from "../../models/semester";
import { ListJurusanModel } from "../../models/list-jurusan";
import { ListProdiAttributes, ListProdiModel } from "../../models/list-prodi";

export const findAll = async (req: any, res: Response) => {
	try {
		const page = new Pagination(+req.query.page || 0, +req.query.size || 10);
		const result = await ListJurusanModel.findAndCountAll({
			where: {
				deleted: { [Op.eq]: 0 },
				...(req.query.search && {
					[Op.or]: [{ jurusan_name: { [Op.like]: `%${req.query.search}%` } }],
				}),
			},
			order: [["id", "desc"]],
			...(req.query.pagination == "true" && {
				limit: page.limit,
				offset: page.offset,
			}),

			include: [ListProdiModel],
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

export const findAllJurusan = async (req: any, res: Response) => {
	try {
		const allJurusan = await ListJurusanModel.findAll({
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

export const findAllProdi = async (req: any, res: Response) => {
	const query = <ListProdiAttributes>req.query;
	const emptyField = requestChecker({
		requireList: ["jurusan_id"],
		requestData: query,
	});

	if (emptyField) {
		const message = `invalid request parameter! require (${emptyField})`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.BAD_REQUEST).json(response);
	}
	try {
		const allProdi = await ListProdiModel.findAll({
			where: {
				deleted: { [Op.eq]: 0 },
				jurusan_id: query.jurusan_id,
			},
		});
		const response = <ResponseDataAttributes>ResponseData.default;
		response.data = allProdi;
		return res.status(StatusCodes.OK).json(response);
	} catch (error: any) {
		console.log(error.message);
		const message = `unable to process request! error ${error.message}`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};
