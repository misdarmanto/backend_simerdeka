import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { Op } from "sequelize";
import { Pagination } from "../../utilities/pagination";
import { requestChecker } from "../../utilities/requestCheker";
import { SemesterModel } from "../../models/semester";
import {
	MbkmProgramStudentAttributes,
	MbkmProgramStudentModel,
} from "../../models/mbkm-program-student";
import { UserModel } from "../../models/user";
import { MbkmProgramModel } from "../../models/mbkm-program";

export const findAll = async (req: any, res: Response) => {
	try {
		const page = new Pagination(+req.query.page || 0, +req.query.size || 10);
		const result = await MbkmProgramStudentModel.findAndCountAll({
			where: {
				deleted: { [Op.eq]: 0 },
				...(req.query.search && {
					[Op.or]: [{ program_name: { [Op.like]: `%${req.query.search}%` } }],
				}),
				...(req.query.semesterId && {
					semesterId: { [Op.eq]: req.query.semesterId },
				}),
				...(req.header("x-user-role") === "student" && {
					studentId: { [Op.eq]: req.header("x-user-id") },
				}),
				...(req.header("x-user-role") === "major" && {
					major_id: { [Op.eq]: req.header("x-major-id") },
				}),
				...(req.header("x-user-role") === "study_program" && {
					study_program_id: { [Op.eq]: req.header("x-study-program-id") },
				}),
			},
			order: [["id", "desc"]],
			...(req.query.pagination == "true" && {
				limit: page.limit,
				offset: page.offset,
			}),
			include: [MbkmProgramModel, SemesterModel, UserModel],
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
	const params = <MbkmProgramStudentAttributes>req.params;

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
		const MbkmProgram = await MbkmProgramStudentModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				mbkm_program_id: { [Op.eq]: params.id },
				...(req.query.semesterId && {
					semesterId: { [Op.eq]: req.query.semesterId },
				}),
				...(req.header("x-user-role") === "major" && {
					major_id: { [Op.eq]: req.header("x-major-id") },
				}),
				...(req.header("x-user-role") === "study_program" && {
					study_program_id: { [Op.eq]: req.header("x-study-program-id") },
				}),
			},
		});

		if (!MbkmProgram) {
			const message = `not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		const response = <ResponseDataAttributes>ResponseData.default;
		response.data = MbkmProgram;
		return res.status(StatusCodes.OK).json(response);
	} catch (error: any) {
		console.log(error.message);
		const message = `unable to process request! error ${error.message}`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};
