import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { Op } from "sequelize";
import { requestChecker } from "../../utilities/requestCheker";
import { RegistrationLoRModel } from "../../models/registration-LoR";

export const changeAssignMentStatus = async (req: any, res: Response) => {
	const emptyField = requestChecker({
		requireList: ["registration_lor_id"],
		requestData: req.body,
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
				registration_lor_id: { [Op.eq]: req.body.registration_lor_id },
			},
		});

		if (!registrationLoR) {
			const message = `not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		switch (req.body.assign_to) {
			case "mahasiswa":
				registrationLoR.registration_lor_assign_to_mahasiswa = true;
				break;
			case "prodi":
				registrationLoR.registration_lor_assign_to_prodi = true;
				break;
			case "jurusan":
				registrationLoR.registration_lor_assign_to_jurusan = true;
				break;
			case "akademik":
				registrationLoR.registration_lor_assign_to_akademik = true;
				break;
			case "biro":
				registrationLoR.registration_lor_assign_to_biro = true;
				break;
			default:
				break;
		}

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
