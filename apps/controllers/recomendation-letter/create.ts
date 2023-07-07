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
			"recomendationLetterStudentTranskrip",
			"recomendationLetterDosenWali",
			"recomendationLetterSyllabus",
			"recomendationLetterApprovalLetter",
			"recomendationLetterProgramName",
			"recomendationLetterProgramDescription",
			"recomendationLetterProgramCorrelation",
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
				studentId: { [Op.eq]: req.header("x-user-id") },
			},
		});

		if (!student) {
			const message = `student not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		body.recomendationLetterStudentId = student.studentId;
		body.recomendationLetterDepartmentId = student.studentDepartmentId;
		body.recomendationLetterStudyProgramId = student.studentStudyProgramId;
		body.recomendationLetterId = uuidv4();
		body.recomendationLetterAssignToStudent = true;
		body.recomendationLetterAssignToStudyProgram = true;

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
