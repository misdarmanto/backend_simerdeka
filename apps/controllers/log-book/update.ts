import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { Op } from "sequelize";
import { requestChecker } from "../../utilities/requestCheker";
import { UserModel } from "../../models/user";
import { LogBookAttributes, LogBookModel } from "../../models/log-book";
import { StudentModel } from "../../models/student";

export const update = async (req: any, res: Response) => {
	const body = <LogBookAttributes>req.body;

	const emptyField = requestChecker({
		requireList: ["log_book_id", "x-user-id"],
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
			const message = `access denied!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.UNAUTHORIZED).json(response);
		}

		const user = await UserModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				user_id: { [Op.eq]: req.header("x-user-id") },
				user_role: { [Op.eq]: "student" },
			},
		});

		if (!user) {
			const message = `access denied!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.UNAUTHORIZED).json(response);
		}

		const logBook = await LogBookModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				log_book_id: { [Op.eq]: body.log_book_id },
			},
		});

		if (!logBook) {
			const message = `not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		const newData = {
			...(body.log_book_report_week && {
				log_book_report_week: body.log_book_report_week,
			}),
			...(body.log_book_report_file && {
				log_book_report_file: body.log_book_report_file,
			}),
		};

		await LogBookModel.update(newData, {
			where: {
				deleted: { [Op.eq]: 0 },
				log_book_id: { [Op.eq]: body.log_book_id },
			},
		});

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
