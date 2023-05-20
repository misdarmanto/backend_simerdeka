import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { Op } from "sequelize";
import { ProgramAttributes, ProgramModel } from "../../models/program";
import { requestChecker } from "../../utilities/requestCheker";
import { v4 as uuidv4 } from "uuid";

export const create = async (req: any, res: Response) => {
	const body = <ProgramAttributes>req.body;
	const emptyField = requestChecker({
		requireList: [
			"program_user_id",
			"program_name",
			"program_description",
			"program_owner",
			"program_type",
			"program_syllabus",
			"program_sks_conversion",
		],
		requestData: body,
	});

	if (emptyField) {
		const message = `invalid request parameter! require (${emptyField})`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.BAD_REQUEST).json(response);
	}

	try {
		const registrationCheck = await ProgramModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				program_user_id: { [Op.eq]: body.program_user_id },
			},
		});

		if (registrationCheck) {
			const message = "already registered";
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.BAD_REQUEST).json(response);
		}

		body.program_id = uuidv4();

		await ProgramModel.create(body);
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
