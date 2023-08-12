import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { Op } from "sequelize";
import { Pagination } from "../../utilities/pagination";
import { requestChecker } from "../../utilities/requestCheker";
import { UserModel } from "../../models/user";
import { LogBookAttributes, LogBookModel } from "../../models/log-book";
import { getActiveSemester } from "../../utilities/active-semester";

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
				userId: { [Op.eq]: req.header("x-user-id") },
			},
		});

		if (!user) {
			const message = `user not registered!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.UNAUTHORIZED).json(response);
		}

		const activeSemester = await getActiveSemester();

		const page = new Pagination(+req.query.page || 0, +req.query.size || 10);
		const result = await LogBookModel.findAndCountAll({
			where: {
				deleted: { [Op.eq]: 0 },
				logBookSemesterId: { [Op.eq]: activeSemester?.semesterId },
				...(req.query.search && {
					[Op.or]: [
						{ logBookStudentName: { [Op.like]: `%${req.query.search}%` } },
					],
				}),
				...(user.userRole === "student" && {
					logBookStudentId: { [Op.eq]: user.userId },
				}),
				...(user.userRole === "studyProgram" && {
					logBookStudyProgramId: {
						[Op.eq]: user.userId,
					},
				}),
				...(user.userRole === "department" && {
					logBookDepartmentId: {
						[Op.eq]: user.userId,
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
				userId: { [Op.eq]: req.header("x-user-id") },
			},
		});

		if (!user) {
			const message = `student not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		const activeSemester = await getActiveSemester();

		const logBook = await LogBookModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				logBookSemesterId: { [Op.eq]: activeSemester?.semesterId },
				logBookId: { [Op.eq]: params.id },
				...(user.userRole === "student" && {
					logBookStudentId: { [Op.eq]: user.userId },
				}),
				...(user.userRole === "studyProgram" && {
					logBookStudyProgramId: {
						[Op.eq]: user.userId,
					},
				}),
				...(user.userRole === "department" && {
					logBookDepartmentId: {
						[Op.eq]: user.userId,
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
