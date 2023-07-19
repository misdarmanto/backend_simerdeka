import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { Op } from "sequelize";
import { Pagination } from "../../utilities/pagination";
import { requestChecker } from "../../utilities/requestCheker";
import {
	RecomendationLetterAttributes,
	RecomendationLetterModel,
} from "../../models/recomendation-letter";
import { StudentModel } from "../../models/student";
import { UserModel } from "../../models/user";
import { getActiveSemester } from "../../utilities/active-semester";

export const findAll = async (req: any, res: Response) => {
	const request = <RecomendationLetterAttributes>req.headers;

	const emptyField = requestChecker({
		requireList: ["x-user-id"],
		requestData: request,
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
			const message = `user not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		const activeSemester = await getActiveSemester();

		const page = new Pagination(+req.query.page || 0, +req.query.size || 10);
		const result = await RecomendationLetterModel.findAndCountAll({
			where: {
				deleted: { [Op.eq]: 0 },
				recomendationLetterSemesterId: { [Op.eq]: activeSemester?.semesterId },
				...(req.query.search && {
					[Op.or]: [
						{
							recomendationLetterProgramName: {
								[Op.like]: `%${req.query.search}%`,
							},
						},
					],
				}),
				...(user?.userRole === "student" && {
					recomendationLetterStudentId: { [Op.eq]: user.userId },
					recomendationLetterAssignToStudent: {
						[Op.eq]: 1,
					},
				}),
				...(user?.userRole === "studyProgram" && {
					recomendationLetterStudyProgramId: {
						[Op.eq]: user.userId,
					},
					recomendationLetterAssignToStudyProgram: {
						[Op.eq]: 1,
					},
				}),
				...(user?.userRole === "department" && {
					recomendationLetterDepartmentId: {
						[Op.eq]: user.userId,
					},
					recomendationLetterAssignToDepartment: {
						[Op.eq]: 1,
					},
				}),
				...(user?.userRole === "lp3m" && {
					recomendationLetterAssignToLp3m: {
						[Op.eq]: 1,
					},
				}),
				...(user?.userRole === "academic" && {
					recomendationLetterAssignToAcademic: {
						[Op.eq]: 1,
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
	const params = <RecomendationLetterAttributes>req.params;

	const emptyField = requestChecker({
		requireList: ["id", "x-user-id"],
		requestData: { ...req.params, ...req.headers },
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
			const message = `user not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		const activeSemester = await getActiveSemester();

		const recomendationLetter = await RecomendationLetterModel.findOne({
			where: {
				recomendationLetterId: { [Op.eq]: params.id },
				deleted: { [Op.eq]: 0 },
				recomendationLetterSemesterId: { [Op.eq]: activeSemester?.semesterId },
				...(user?.userRole === "student" && {
					recomendationLetterStudentId: { [Op.eq]: user.userId },
					recomendationLetterAssignToStudent: {
						[Op.eq]: 1,
					},
				}),
				...(user?.userRole === "studyProgram" && {
					recomendationLetterStudyProgramId: {
						[Op.eq]: user.userId,
					},
					recomendationLetterAssignToStudyProgram: {
						[Op.eq]: 1,
					},
				}),
				...(user?.userRole === "department" && {
					recomendationLetterDepartmentId: {
						[Op.eq]: user.userId,
					},
					recomendationLetterAssignToDepartment: {
						[Op.eq]: 1,
					},
				}),
				...(user?.userRole === "lp3m" && {
					recomendationLetterAssignToLp3m: {
						[Op.eq]: 1,
					},
				}),
				...(user?.userRole === "academic" && {
					recomendationLetterAssignToAcademic: {
						[Op.eq]: 1,
					},
				}),
			},
			include: [StudentModel],
		});

		if (!recomendationLetter) {
			const message = `not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		const response = <ResponseDataAttributes>ResponseData.default;
		response.data = recomendationLetter;
		return res.status(StatusCodes.OK).json(response);
	} catch (error: any) {
		console.log(error.message);
		const message = `unable to process request! error ${error.message}`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};
