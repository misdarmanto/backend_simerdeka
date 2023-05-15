import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { Op } from "sequelize";
import { requestChecker } from "../../utilities/requestCheker";
import {
	RegistrationProgramAttributes,
	RegistrationProgramModel,
} from "../../models/register-program";

export const update = async (req: any, res: Response) => {
	const body = <RegistrationProgramAttributes>req.body;

	const emptyField = requestChecker({
		requireList: ["registration_program_id"],
		requestData: body,
	});

	if (emptyField) {
		const message = `invalid request parameter! require (${emptyField})`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.BAD_REQUEST).json(response);
	}

	try {
		const registration = await RegistrationProgramModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				registration_program_id: { [Op.eq]: body.registration_program_id },
			},
		});

		if (!registration) {
			const message = `not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		registration.program_name = body.program_name;
		registration.program_description = body.program_description;
		registration.program_owner = body.program_owner;
		registration.program_type = body.program_type;
		registration.lecture_syllabus = body.lecture_syllabus;
		registration.sks_conversion = body.sks_conversion;

		await registration.save();

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
