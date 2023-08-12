import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { Op } from "sequelize";
import { requestChecker } from "../../utilities/requestCheker";
import { UserModel } from "../../models/user";
import { MbkmProgramProdiModel } from "../../models/mbkm-program-prodi";

export const remove = async (req: any, res: Response) => {
	const emptyField = requestChecker({
		requireList: ["programId"],
		requestData: req.query,
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

		const mbkmProgramProdi = await MbkmProgramProdiModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				mbkmProgramProdiProgramId: { [Op.eq]: req.query.programId },
			},
		});

		if (!mbkmProgramProdi) {
			const message = `mbkm program prodi not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		await MbkmProgramProdiModel.update(
			{ deleted: 1 },
			{
				where: {
					mbkmProgramProdiProgramId: { [Op.eq]: req.query.programId },
				},
			}
		);

		const response = <ResponseDataAttributes>ResponseData.default;
		response.data = { message: "success" };
		return res.status(StatusCodes.OK).json(response);
	} catch (error: any) {
		console.log(error.message);
		const message = `unable to process request! error ${error.message}`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};
