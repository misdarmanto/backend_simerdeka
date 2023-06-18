import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { requestChecker } from "../../utilities/requestCheker";
import { v4 as uuidv4 } from "uuid";
import {
	MbkmProgramStudentAttributes,
	MbkmProgramStudentModel,
} from "../../models/mbkm-program-student";

export const create = async (req: any, res: Response) => {
	const body = <MbkmProgramStudentAttributes>req.body;
	const emptyField = requestChecker({
		requireList: [
			"mbkm_program_student_sks",
			"mbkm_program_id",
			"student_id",
			"major_id",
			"study_program_id",
			"semester_id",
		],
		requestData: body,
	});

	if (emptyField) {
		const message = `invalid request parameter! require (${emptyField})`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.BAD_REQUEST).json(response);
	}

	try {
		body.mbkmProgramStudentId = uuidv4();
		await MbkmProgramStudentModel.create(body);
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
