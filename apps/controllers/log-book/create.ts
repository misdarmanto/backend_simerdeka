import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { requestChecker } from "../../utilities/requestCheker";
import { v4 as uuidv4 } from "uuid";
import { StudentModel } from "../../models/student";
import { Op } from "sequelize";
import { LogBookAttributes, LogBookModel } from "../../models/log-book";
import { getActiveSemester } from "../../utilities/active-semester";

export const create = async (req: any, res: Response) => {
	const body = <LogBookAttributes>req.body;
	const emptyField = requestChecker({
		requireList: ["x-user-id", "logBookReportFile", "logBookReportWeek"],
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
				studentIsRegistered: { [Op.eq]: true },
			},
		});

		if (!student) {
			const message = `access denied!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.UNAUTHORIZED).json(response);
		}

		const activeSemester = await getActiveSemester();

		body.logBookId = uuidv4();
		body.logBookSemesterId = activeSemester?.semesterId || "";
		body.logBookStudentId = student.studentId;
		body.logBookStudentName = student.studentName;
		body.logBookStudentNim = student.studentNim;
		body.logBookStudyProgramId = student.studentStudyProgramId;
		body.logBookStudyProgramName = student.studentStudyProgramName;
		body.logBookDepartmentId = student.studentDepartmentId;
		body.logBookDepartmentName = student.studentDepartmentName;
		await LogBookModel.create(body);

		const response = <ResponseDataAttributes>ResponseData.default;
		response.data = { message: "success" };
		return res.status(StatusCodes.CREATED).json(response);
	} catch (error: any) {
		const message = `unable to process request! error ${error.message}`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};
