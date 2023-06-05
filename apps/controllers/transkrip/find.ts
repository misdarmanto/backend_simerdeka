import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { Op } from "sequelize";
import { Pagination } from "../../utilities/pagination";
import { requestChecker } from "../../utilities/requestCheker";
import { StudentModel } from "../../models/student";
import { UserModel } from "../../models/user";
import { TranskripAttributes, TranskripModel } from "../../models/transkrip";
import { MbkmProgramModel } from "../../models/mbkm-program";
import { MataKuliahModel } from "../../models/matkul";

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
		const result = await TranskripModel.findAndCountAll({
			where: {
				deleted: { [Op.eq]: 0 },
				...(user.user_role === "student" && {
					transkripStudentId: { [Op.eq]: user.user_id },
				}),
				...(user.user_role === "study_program" && {
					transkripStudyProgramId: {
						[Op.eq]: user.user_id,
					},
				}),
				...(user.user_role === "department" && {
					transkripDepartmentId: {
						[Op.eq]: user.user_id,
					},
				}),
			},
			order: [["id", "desc"]],
			...(req.query.pagination == "true" && {
				limit: page.limit,
				offset: page.offset,
			}),

			include: [MataKuliahModel],
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
	const params = <TranskripAttributes>req.params;

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
			const message = `user not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		const transkrip = await TranskripModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				transkripId: { [Op.eq]: params.id },
				...(user.user_role === "student" && {
					transkripStudentId: { [Op.eq]: user.user_id },
				}),
				...(user.user_role === "study_program" && {
					transkripStudyProgramId: {
						[Op.eq]: user.user_id,
					},
				}),
				...(user.user_role === "department" && {
					transkripDepartmentId: {
						[Op.eq]: user.user_id,
					},
				}),
			},
		});

		if (!transkrip) {
			const message = `not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		const response = <ResponseDataAttributes>ResponseData.default;
		response.data = transkrip;
		return res.status(StatusCodes.OK).json(response);
	} catch (error: any) {
		console.log(error.message);
		const message = `unable to process request! error ${error.message}`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};
