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
import { getActiveSemester } from "../../utilities/active-semester";

export const create = async (req: any, res: Response) => {
	const body = <ReportParticipationAttributes>req.body;
	const emptyField = requestChecker({
		requireList: ["x-user-id", "reportParticipationLetter"],
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

		const recomendationLetter = await RecomendationLetterModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				recomendationLetterStudentId: { [Op.eq]: student.studentId },
				recomendationLetterStatus: { [Op.eq]: "accepted" },
			},
		});

		if (!recomendationLetter) {
			const message = `recommendation letter not registered`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.UNAUTHORIZED).json(response);
		}

		const activeSemester = await getActiveSemester();

		body.reportParticipationId = uuidv4();
		body.reportParticipationStudentId = student.studentId;
		body.reportParticipationStudyProgramId = student.studentStudyProgramId;
		body.reportParticipationDepartmentId = student.studentDepartmentId;
		body.reportParticipationSemesterId = activeSemester?.semesterId || "";
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
