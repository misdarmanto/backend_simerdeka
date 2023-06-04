import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { Op } from "sequelize";
import { Pagination } from "../../utilities/pagination";
import { requestChecker } from "../../utilities/requestCheker";
import { MbkmProgramAttributes, MbkmProgramModel } from "../../models/mbkm-program";
import { MbkmProgramProdiModel } from "../../models/mbkm-program-prodi";
import { UserModel } from "../../models/user";
import { SemesterModel } from "../../models/semester";
import { StudyProgramModel } from "../../models/study-program";
import { DepartmentModel } from "../../models/department";

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
			const message = `access denied!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.UNAUTHORIZED).json(response);
		}

		const page = new Pagination(+req.query.page || 0, +req.query.size || 10);
		const result = await MbkmProgramProdiModel.findAndCountAll({
			where: {
				deleted: { [Op.eq]: 0 },
				...(req.query.search && {
					[Op.or]: [{ program_name: { [Op.like]: `%${req.query.search}%` } }],
				}),
				...(req.query.program_id && {
					mbkm_program_prodi_program_id: {
						[Op.eq]: req.query.program_id,
					},
				}),
				...(req.query.semester_id && {
					mbkm_program_prodi_semester_id: {
						[Op.eq]: req.query.semester_id,
					},
				}),
				...(user?.user_role === "study_program" && {
					mbkm_program_prodi_study_program_id: {
						[Op.eq]: user.user_id,
					},
				}),
				...(user?.user_role === "department" && {
					mbkm_program_prodi_department_id: {
						[Op.eq]: user.user_id,
					},
				}),
			},

			include: [
				SemesterModel,
				StudyProgramModel,
				DepartmentModel,
				MbkmProgramModel,
			],
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
	const params = <MbkmProgramAttributes>req.params;

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
				user_id: { [Op.eq]: req.header("x-user-id") },
			},
		});

		if (!user) {
			const message = `access denied!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.UNAUTHORIZED).json(response);
		}

		const result = await MbkmProgramProdiModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				mbkm_program_prodi_id: { [Op.eq]: params.id },
				...(req.query.semester_id && {
					mbkm_program_prodi_semester_id: {
						[Op.eq]: req.query.semester_id,
					},
				}),
				...(user?.user_role === "study_program" && {
					mbkm_program_prodi_study_program_id: {
						[Op.eq]: user.user_id,
					},
				}),
				...(user?.user_role === "department" && {
					mbkm_program_prodi_department_id: {
						[Op.eq]: user.user_id,
					},
				}),
			},
			include: [
				SemesterModel,
				StudyProgramModel,
				DepartmentModel,
				MbkmProgramModel,
			],
		});

		if (!result) {
			const message = `not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		const response = <ResponseDataAttributes>ResponseData.default;
		response.data = result;
		return res.status(StatusCodes.OK).json(response);
	} catch (error: any) {
		console.log(error.message);
		const message = `unable to process request! error ${error.message}`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};
