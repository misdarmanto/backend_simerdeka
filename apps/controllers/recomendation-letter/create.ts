import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { requestChecker } from "../../utilities/requestCheker";
import { v4 as uuidv4 } from "uuid";
import {
	RecomendationLetterAttributes,
	RecomendationLetterModel,
} from "../../models/recomendation-letter";

export const create = async (req: any, res: Response) => {
	const body = <RecomendationLetterAttributes>req.body;

	const emptyField = requestChecker({
		requireList: [
			"x-user-id",
			"x-study-program-id",
			"x-major-id",
			"recomendation_letter_student_transkrip",
			"recomendation_letter_dosen_wali",
			"recomendation_letter_approval_letter",
			"recomendation_letter_program_name",
			"recomendation_letter_program_correlation",
		],
		requestData: { ...req.body, ...req.headers },
	});

	if (emptyField) {
		const message = `invalid request parameter! require (${emptyField})`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.BAD_REQUEST).json(response);
	}

	try {
		body.student_id = req.header("x-user-id");
		body.major_id = req.header("x-major-id");
		body.study_program_id = req.header("x-study-program-id");
		body.recomendation_letter_id = uuidv4();
		body.recomendation_letter_assign_to_student = true;
		body.recomendation_letter_assign_to_study_program = true;

		await RecomendationLetterModel.create(body);
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
