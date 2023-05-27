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
import { UserModel } from "../../models/user";
import { StudentModel } from "../../models/student";

export const findAll = async (req: any, res: Response) => {
	try {
		const page = new Pagination(+req.query.page || 0, +req.query.size || 10);
		const result = await RecomendationLetterModel.findAndCountAll({
			where: {
				deleted: { [Op.eq]: 0 },
				...(req.query.search && {
					[Op.or]: [
						{
							recomendation_letter_program_name: {
								[Op.like]: `%${req.query.search}%`,
							},
						},
					],
				}),
				...(req.header("x-user-role") === "student" && {
					student_id: { [Op.eq]: req.header("x-user-id") },
					recomendation_letter_assign_to_student: {
						[Op.eq]: 1,
					},
				}),
				...(req.header("x-user-role") === "major" && {
					major_id: { [Op.eq]: req.header("x-major-id") },
					recomendation_letter_assign_to_major: {
						[Op.eq]: 1,
					},
				}),
				...(req.header("x-user-role") === "study_program" && {
					study_program_id: { [Op.eq]: req.header("x-study-program-id") },
					recomendation_letter_assign_to_study_program: {
						[Op.eq]: 1,
					},
				}),
				...(req.header("x-user-role") === "lp3m" && {
					recomendation_letter_assign_to_lp3m: {
						[Op.eq]: 1,
					},
				}),
				...(req.header("x-user-role") === "academic" && {
					recomendation_letter_assign_to_academic: {
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
		const recomendationLetter = await RecomendationLetterModel.findOne({
			where: {
				recomendation_letter_id: { [Op.eq]: params.id },
				deleted: { [Op.eq]: 0 },
				...(req.header("x-user-role") === "student" && {
					student_id: { [Op.eq]: req.header("x-user-id") },
					recomendation_letter_assign_to_student: {
						[Op.eq]: 1,
					},
				}),
				...(req.header("x-user-role") === "major" && {
					major_id: { [Op.eq]: req.header("x-major-id") },
					recomendation_letter_assign_to_major: {
						[Op.eq]: 1,
					},
				}),
				...(req.header("x-user-role") === "study_program" && {
					study_program_id: { [Op.eq]: req.header("x-study-program-id") },
					recomendation_letter_assign_to_study_program: {
						[Op.eq]: 1,
					},
				}),
				...(req.header("x-user-role") === "lp3m" && {
					recomendation_letter_assign_to_lp3m: {
						[Op.eq]: 1,
					},
				}),
				...(req.header("x-user-role") === "academic" && {
					recomendation_letter_assign_to_academic: {
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
