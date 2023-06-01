import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { requestChecker } from "../../utilities/requestCheker";
import { v4 as uuidv4 } from "uuid";
import {
	RecomendationLetterAttributes,
	RecomendationLetterModel,
} from "../../models/recomendation-letter";
import { StudentModel } from "../../models/student";
import { Op } from "sequelize";

export const create = async (req: any, res: Response) => {
	const body = <RecomendationLetterAttributes>req.body;

	const emptyField = requestChecker({
		requireList: [
			"x-user-id",
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
		const student = await StudentModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				student_id: { [Op.eq]: req.header("x-user-id") },
			},
		});

		if (!student) {
			const message = `student not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		body.recomendation_letter_student_id = student.student_id;
		body.recomendation_letter_department_id = student.student_department_id;
		body.recomendation_letter_study_program_id = student.student_study_program_id;
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
