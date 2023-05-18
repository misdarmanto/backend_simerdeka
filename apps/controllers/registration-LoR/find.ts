import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { Op } from "sequelize";
import { Pagination } from "../../utilities/pagination";
import { requestChecker } from "../../utilities/requestCheker";
import { RegistrationLoRAttributes, RegistrationLoRModel } from "../../models/registration-LoR";

export const findAll = async (req: any, res: Response) => {
	try {
		const page = new Pagination(+req.query.page || 0, +req.query.size || 10);
		const result = await RegistrationLoRModel.findAndCountAll({
			where: {
				deleted: { [Op.eq]: 0 },
				...(req.query.search && {
					[Op.or]: [{ program_name: { [Op.like]: `%${req.query.search}%` } }],
				}),
			},
			order: [["id", "desc"]],
			...(req.query.pagination == "true" && {
				limit: page.limit,
				offset: page.offset,
			}),

			// attributes: [
			// 	"registration_lor_id",
			// 	"user_id",
			// 	"student_id",
			// 	"student_name",
			// 	"student_nim",
			// 	"student_transkrip",
			// 	"dosen_wali",
			// 	"surat_persetujuan_dosen_wali",
			// 	"program_name",
			// 	"program_correlation_description",
			// ],
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
	const params = <RegistrationLoRAttributes>req.params;

	const emptyField = requestChecker({
		requireList: ["id"],
		requestData: params,
	});

	if (emptyField) {
		const message = `invalid request parameter! require (${emptyField})`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.BAD_REQUEST).json(response);
	}

	try {
		const registrationLoR = await RegistrationLoRModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				registration_lor_id: { [Op.eq]: params.id },
			},
		});

		if (!registrationLoR) {
			const message = `not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		const response = <ResponseDataAttributes>ResponseData.default;
		response.data = registrationLoR;
		return res.status(StatusCodes.OK).json(response);
	} catch (error: any) {
		console.log(error.message);
		const message = `unable to process request! error ${error.message}`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};
