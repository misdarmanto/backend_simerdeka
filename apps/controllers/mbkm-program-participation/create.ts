import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { requestChecker } from "../../utilities/requestCheker";
import { v4 as uuidv4 } from "uuid";
import { UserModel } from "../../models/user";
import { Op } from "sequelize";
import {
	MbkmProgramParticipationAttributes,
	MbkmProgramParticipationModel,
} from "../../models/mbkm-program-participation";

export const create = async (req: any, res: Response) => {
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
				[Op.or]: [{ user_role: "academic" }, { user_role: "lp3m" }],
			},
		});

		if (!user) {
			const message = `access denied!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.UNAUTHORIZED).json(response);
		}

		let mbkmProgramParticipationList: MbkmProgramParticipationAttributes[] = [];

		if (Array.isArray(req.body)) {
			const result = req.body.map((item: MbkmProgramParticipationAttributes) => {
				const newData: MbkmProgramParticipationAttributes = {
					...item,
					mbkm_program_participation_id: uuidv4(),
				};
				return newData;
			});
			mbkmProgramParticipationList = result;
		}

		await MbkmProgramParticipationModel.bulkCreate(mbkmProgramParticipationList);
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
