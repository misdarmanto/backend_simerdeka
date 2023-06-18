import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { requestChecker } from "../../utilities/requestCheker";
import { v4 as uuidv4 } from "uuid";
import { UserModel } from "../../models/user";
import { Op } from "sequelize";
import {
	MbkmProgramProdiAttributes,
	MbkmProgramProdiModel,
} from "../../models/mbkm-program-prodi";

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
				userId: { [Op.eq]: req.header("x-user-id") },
				[Op.or]: [{ userRole: "academic" }, { userRole: "lp3m" }],
			},
		});

		if (!user) {
			const message = `access denied!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.UNAUTHORIZED).json(response);
		}

		let mbkmProgramProdiList: MbkmProgramProdiAttributes[] = [];

		if (Array.isArray(req.body)) {
			const result = req.body.map((item: MbkmProgramProdiAttributes) => {
				const newData: MbkmProgramProdiAttributes = {
					...item,
					mbkmProgramProdiId: uuidv4(),
				};
				return newData;
			});
			mbkmProgramProdiList = result;
		}

		await MbkmProgramProdiModel.bulkCreate(mbkmProgramProdiList);
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
