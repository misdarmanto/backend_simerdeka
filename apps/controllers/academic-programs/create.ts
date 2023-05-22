import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { requestChecker } from "../../utilities/requestCheker";
import { v4 as uuidv4 } from "uuid";
import { ListJurusanAttributes, ListJurusanModel } from "../../models/list-jurusan";
import { ListProdiAttributes, ListProdiModel } from "../../models/list-prodi";
import { Op } from "sequelize";

export const createJurusan = async (req: any, res: Response) => {
	const body = <ListJurusanAttributes>req.body;
	const emptyField = requestChecker({
		requireList: ["jurusan_name"],
		requestData: body,
	});

	if (emptyField) {
		const message = `invalid request parameter! require (${emptyField})`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.BAD_REQUEST).json(response);
	}

	try {
		body.jurusan_id = uuidv4();
		await ListJurusanModel.create(body);
		const response = <ResponseDataAttributes>ResponseData.default;
		response.data = { message: "success" };
		return res.status(StatusCodes.CREATED).json(response);
	} catch (error: any) {
		console.log(error.message);
		const message = `unable to process request! error ${error.message}`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};

export const createProdi = async (req: any, res: Response) => {
	const body = <ListProdiAttributes>req.body;
	const emptyField = requestChecker({
		requireList: ["prodi_name", "jurusan_id"],
		requestData: body,
	});

	if (emptyField) {
		const message = `invalid request parameter! require (${emptyField})`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.BAD_REQUEST).json(response);
	}

	try {
		const jurusanCheck = await ListJurusanModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				jurusan_id: { [Op.eq]: body.jurusan_id },
			},
		});

		if (!jurusanCheck) {
			const message = `not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		body.prodi_id = uuidv4();
		await ListProdiModel.create(body);
		const response = <ResponseDataAttributes>ResponseData.default;
		response.data = { message: "success" };
		return res.status(StatusCodes.CREATED).json(response);
	} catch (error: any) {
		console.log(error.message);
		const message = `unable to process request! error ${error.message}`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};
