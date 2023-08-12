import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { requestChecker } from "../../utilities/requestCheker";
import { v4 as uuidv4 } from "uuid";
import { SksConvertionAttributes, SksConvertionModel } from "../../models/sks-convertion";
import { UserModel } from "../../models/user";
import { Op } from "sequelize";

export const create = async (req: any, res: Response) => {
	const body = <SksConvertionAttributes>req.body;
	const emptyField = requestChecker({
		requireList: [
			"sksConvertionName",
			"sksConvertionCreatedBy",
			"sksConvertionStudyProgramId",
			"sksConvertionMbkmProgramId",
		],
		requestData: body,
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
				userRole: { [Op.eq]: "studyProgram" },
			},
		});

		if (!user) {
			const message = `access denied!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.UNAUTHORIZED).json(response);
		}

		body.sksConvertionStudyProgramId = user.userId;
		body.sksConvertionId = uuidv4();
		await SksConvertionModel.create(body);

		const response = <ResponseDataAttributes>ResponseData.default;
		response.data = { message: "success" };
		return res.status(StatusCodes.CREATED).json(response);
	} catch (error: any) {
		const message = `unable to process request! error ${error.message}`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};
