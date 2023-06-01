import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { requestChecker } from "../../utilities/requestCheker";
import { v4 as uuidv4 } from "uuid";
import { MbkmProgramAttributes, MbkmProgramModel } from "../../models/mbkm-program";
import { UserModel } from "../../models/user";
import { Op } from "sequelize";

export const create = async (req: any, res: Response) => {
	const body = <MbkmProgramAttributes>req.body;
	const emptyField = requestChecker({
		requireList: [
			"x-user-id",
			"mbkm_program_created_by",
			"mbkm_program_name",
			"mbkm_program_category",
			"mbkm_program_semester_id",
			"mbkm_program_department_id",
			"mbkm_program_syllabus",
			"mbkm_program_department_name",
			"mbkm_program_study_program_id",
			"mbkm_program_study_program_name",
		],
		requestData: { ...req.body, ...req.headers },
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
				[Op.or]: [{ user_role: "academic" }, { user_role: "lp3m" }],
			},
		});

		if (!user) {
			const message = `access denied!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.UNAUTHORIZED).json(response);
		}

		body.mbkm_program_id = uuidv4();
		await MbkmProgramModel.create(body);
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
