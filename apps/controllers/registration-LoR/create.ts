import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { Op } from "sequelize";
import { requestChecker } from "../../utilities/requestCheker";
import { v4 as uuidv4 } from "uuid";
import { RegistrationLoRAttributes, RegistrationLoRModel } from "../../models/registration-LoR";

export const create = async (req: any, res: Response) => {
	const body = <RegistrationLoRAttributes>req.body;

	const emptyField = requestChecker({
		requireList: [
			"user_id",
			"student_id",
			"student_name",
			"student_nim",
			"student_transkrip",
			"dosen_wali",
			"surat_persetujuan_dosen_wali",
			"program_name",
			"program_correlation_description",
		],
		requestData: body,
	});

	if (emptyField) {
		const message = `invalid request parameter! require (${emptyField})`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.BAD_REQUEST).json(response);
	}

	try {
		const registrationCheck = await RegistrationLoRModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				user_id: { [Op.eq]: body.user_id },
				student_id: { [Op.eq]: body.student_id },
			},
		});

		if (registrationCheck) {
			const message = "already registered";
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.BAD_REQUEST).json(response);
		}

		body.registration_LoR_id = uuidv4();

		await RegistrationLoRModel.create(body);
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
