import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { Op } from "sequelize";
import { Pagination } from "../../utilities/pagination";
import { requestChecker } from "../../utilities/requestCheker";
import { SksConvertionAttributes, SksConvertionModel } from "../../models/sks-convertion";
import { StudentModel } from "../../models/student";
import { MbkmProgramModel } from "../../models/mbkm-program";

export const findAll = async (req: any, res: Response) => {
	try {
		const page = new Pagination(+req.query.page || 0, +req.query.size || 10);
		const result = await SksConvertionModel.findAndCountAll({
			where: {
				deleted: { [Op.eq]: 0 },
			},
			order: [["id", "desc"]],
			...(req.query.pagination == "true" && {
				limit: page.limit,
				offset: page.offset,
			}),
			attributes: [
				"sks_convertion_id",
				"sks_convertion_total",
				"sks_convertion_student_id",
				"sks_convertion_mbkm_program_id",
			],

			include: [StudentModel, MbkmProgramModel],
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
	const params = <SksConvertionAttributes>req.params;

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
		const page = new Pagination(+req.query.page || 0, +req.query.size || 10);
		const result = await SksConvertionModel.findAndCountAll({
			where: {
				deleted: { [Op.eq]: 0 },
				sks_convertion_mbkm_program_id: { [Op.eq]: params.id },
			},
			order: [["id", "desc"]],
			...(req.query.pagination == "true" && {
				limit: page.limit,
				offset: page.offset,
			}),
			attributes: [
				"sks_convertion_id",
				"sks_convertion_total",
				"sks_convertion_student_id",
				"sks_convertion_mbkm_program_id",
			],

			include: [StudentModel, MbkmProgramModel],
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

export const findStudent = async (req: any, res: Response) => {
	const params = <SksConvertionAttributes>req.params;

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
		const result = await SksConvertionModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				sks_convertion_student_id: { [Op.eq]: params.id },
			},
			attributes: [
				"sks_convertion_id",
				"sks_convertion_total",
				"sks_convertion_student_id",
				"sks_convertion_mbkm_program_id",
			],

			include: [StudentModel, MbkmProgramModel],
		});

		const response = <ResponseDataAttributes>ResponseData.default;
		response.data = result;
		return res.status(StatusCodes.OK).json(response);
	} catch (error: any) {
		console.log(error.message);
		const message = `unable to process request! error ${error.message}`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};
