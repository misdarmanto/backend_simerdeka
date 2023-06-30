import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { Op } from "sequelize";
import { Pagination } from "../../utilities/pagination";
import { requestChecker } from "../../utilities/requestCheker";
import {
	ReportParticipationAttributes,
	ReportParticipationModel,
} from "../../models/report-participation";
import { StudentModel } from "../../models/student";
import { UserModel } from "../../models/user";

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

		const page = new Pagination(+req.query.page || 0, +req.query.size || 10);
		const result = await ReportParticipationModel.findAndCountAll({
			where: {
				deleted: { [Op.eq]: 0 },
				...(req.query.search && {
					[Op.or]: [{ programName: { [Op.like]: `%${req.query.search}%` } }],
				}),
				...(user.userRole === "student" && {
					reportParticipationStudentId: { [Op.eq]: user.userId },
				}),
				...(user.userRole === "studyProgram" && {
					reportParticipationStudyProgramId: {
						[Op.eq]: user.userId,
					},
				}),
				...(user.userRole === "department" && {
					reportParticipationDepartmentId: {
						[Op.eq]: user.userId,
					},
				}),
			},
			order: [["id", "desc"]],
			...(req.query.pagination == "true" && {
				limit: page.limit,
				offset: page.offset,
			}),
			include: [StudentModel],
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
	const params = <ReportParticipationAttributes>req.params;

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

		const reportParticipation = await ReportParticipationModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				reportParticipationId: { [Op.eq]: params.id },
				...(user.userRole === "student" && {
					reportParticipationStudentId: { [Op.eq]: user.userId },
				}),
				...(user.userRole === "studyProgram" && {
					reportParticipationStudyProgramId: {
						[Op.eq]: user.userId,
					},
				}),
				...(user.userRole === "department" && {
					reportParticipationDepartmentId: {
						[Op.eq]: user.userId,
					},
				}),
			},

			include: [StudentModel],
		});

		if (!reportParticipation) {
			const message = `not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		const response = <ResponseDataAttributes>ResponseData.default;
		response.data = reportParticipation;
		return res.status(StatusCodes.OK).json(response);
	} catch (error: any) {
		console.log(error.message);
		const message = `unable to process request! error ${error.message}`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};
