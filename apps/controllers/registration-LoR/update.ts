import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { Op } from "sequelize";
import { requestChecker } from "../../utilities/requestCheker";
import { RegistrationLoRAttributes, RegistrationLoRModel } from "../../models/registration-LoR";

export const update = async (req: any, res: Response) => {
	const body = <RegistrationLoRAttributes>req.body;

	const emptyField = requestChecker({
		requireList: ["registration_LoR_id"],
		requestData: body,
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
				registration_LoR_id: { [Op.eq]: body.registration_LoR_id },
			},
		});

		if (!registrationLoR) {
			const message = `not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		registrationLoR.student_transkrip = body.student_transkrip;
		registrationLoR.dosen_wali = body.dosen_wali;
		registrationLoR.surat_persetujuan_dosen_wali = body.surat_persetujuan_dosen_wali;
		registrationLoR.program_name = body.program_name;
		registrationLoR.program_correlation_description = body.program_correlation_description;
		registrationLoR.registration_status = body.registration_status;

		await registrationLoR.save();

		const response = <ResponseDataAttributes>ResponseData.default;
		response.data = { message: "success" };
		return res.status(StatusCodes.OK).json(response);
	} catch (error: any) {
		console.log(error.message);
		const message = `unable to process request! error ${error.message}`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};
