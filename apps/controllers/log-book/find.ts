import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { Op } from "sequelize";
import { Pagination } from "../../utilities/pagination";
import { requestChecker } from "../../utilities/requestCheker";
import { StudentModel } from "../../models/student";
import { UserModel } from "../../models/user";
import { LogBookAttributes, LogBookModel } from "../../models/log-book";

export const findAll = async (req: any, res: Response) => {
	const emptyField = requestChecker({
		requireList: ["x-user-id"],
		requestData: req.headers,
	});

	if (emptyField) {
		const message = `invalid request parameter! require (${emptyField})`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.BAD_REQUEST).json(response);
	}

	try {
		const user = await UserModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				user_id: { [Op.eq]: req.header("x-user-id") },
			},
		});

		if (!user) {
			const message = `user not registered!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.UNAUTHORIZED).json(response);
		}

		const page = new Pagination(+req.query.page || 0, +req.query.size || 10);
		const result = await LogBookModel.findAndCountAll({
			where: {
				deleted: { [Op.eq]: 0 },
				...(req.query.search && {
					[Op.or]: [
						{ log_book_student_name: { [Op.like]: `%${req.query.search}%` } },
					],
				}),
				...(user.user_role === "student" && {
					log_book_student_id: { [Op.eq]: user.user_id },
				}),
				...(user.user_role === "study_program" && {
					log_book_study_program_id: {
						[Op.eq]: user.user_id,
					},
				}),
				...(user.user_role === "department" && {
					log_book_department_id: {
						[Op.eq]: user.user_id,
					},
				}),
			},
			order: [["id", "desc"]],
			...(req.query.pagination == "true" && {
				limit: page.limit,
				offset: page.offset,
			}),
		});

		const response = <ResponseDataAttributes>ResponseData.default;
		response.data = page.data(result);
		return res.status(StatusCodes.OK).json(response);
	} catch (error: any) {
		console.log(error.message);
		const message = `unable to process request! error ${error.message}`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};

export const findOne = async (req: any, res: Response) => {
	const params = <LogBookAttributes>req.params;

	const emptyField = requestChecker({
		requireList: ["id"],
		requestData: req.params,
	});

	if (emptyField) {
		const message = `invalid request parameter! require (${emptyField})`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.BAD_REQUEST).json(response);
	}

	try {
		const user = await UserModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				user_id: { [Op.eq]: req.header("x-user-id") },
			},
		});

		if (!user) {
			const message = `student not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		const logBook = await LogBookModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				log_book_id: { [Op.eq]: params.id },
				...(user.user_role === "student" && {
					log_book_student_id: { [Op.eq]: user.user_id },
				}),
				...(user.user_role === "study_program" && {
					log_book_study_program_id: {
						[Op.eq]: user.user_id,
					},
				}),
				...(user.user_role === "department" && {
					log_book_department_id: {
						[Op.eq]: user.user_id,
					},
				}),
			},
		});

		if (!logBook) {
			const message = `not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		const response = <ResponseDataAttributes>ResponseData.default;
		response.data = logBook;
		return res.status(StatusCodes.OK).json(response);
	} catch (error: any) {
		console.log(error.message);
		const message = `unable to process request! error ${error.message}`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};