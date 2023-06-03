import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { requestChecker } from "../../utilities/requestCheker";
import { v4 as uuidv4 } from "uuid";
import { StudentModel } from "../../models/student";
import { Op } from "sequelize";
import { LogBookAttributes, LogBookModel } from "../../models/log-book";

export const create = async (req: any, res: Response) => {
	const body = <LogBookAttributes>req.body;
	const emptyField = requestChecker({
		requireList: ["x-user-id", "log_book_report_file", "log_book_report_week"],
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
				student_is_registered: { [Op.eq]: true },
			},
		});

		if (!student) {
			const message = `access denied!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.UNAUTHORIZED).json(response);
		}

		body.log_book_id = uuidv4();
		body.log_book_student_id = student.student_id;
		body.log_book_student_name = student.student_name;
		body.log_book_student_nim = student.student_nim;
		body.log_book_study_program_id = student.student_study_program_id;
		body.log_book_study_program_name = student.student_study_program_name;
		body.log_book_department_id = student.student_department_id;
		body.log_book_department_name = student.student_department_name;
		await LogBookModel.create(body);

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
