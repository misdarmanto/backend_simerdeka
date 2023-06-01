import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { requestChecker } from "../../utilities/requestCheker";
import { v4 as uuidv4 } from "uuid";
import {
	ReportParticipationAttributes,
	ReportParticipationModel,
} from "../../models/report-participation";
import { StudentModel } from "../../models/student";
import { Op } from "sequelize";
import { RecomendationLetterModel } from "../../models/recomendation-letter";

export const create = async (req: any, res: Response) => {
	const body = <ReportParticipationAttributes>req.body;
	const emptyField = requestChecker({
		requireList: ["x-user-id", "report_participation_letter"],
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

		const recomendationLetter = await RecomendationLetterModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				recomendation_letter_student_id: { [Op.eq]: student.student_id },
				recomendation_letter_status: { [Op.eq]: "accepted" },
			},
		});

		if (!recomendationLetter) {
			const message = `recommendation letter not registered`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.UNAUTHORIZED).json(response);
		}

		body.report_participation_id = uuidv4();
		(body.report_participation_student_id = student.student_id),
			(body.report_participation_study_program_id =
				student.student_study_program_id);
		body.report_participation_department_id = student.student_department_id;
		await ReportParticipationModel.create(body);

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
