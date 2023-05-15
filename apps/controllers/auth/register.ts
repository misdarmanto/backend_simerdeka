import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { Op } from "sequelize";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { hashPassword } from "../../utilities/scure_password";
import { UserAttributes, UserModel } from "../../models/user";
import { requestChecker } from "../../utilities/requestCheker";
import { v4 as uuidv4 } from "uuid";
import { generateAccessToken } from "../../utilities/jwt";

export const register = async (req: any, res: Response) => {
	const body = <UserAttributes>req.body;

	const emptyField = requestChecker({
		requireList: ["name", "email", "password", "role"],
		requestData: body,
	});

	if (emptyField) {
		const message = `invalid request parameter! require (${emptyField})`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.BAD_REQUEST).json(response);
	}

	try {
		const user = await UserModel.findOne({
			raw: true,
			where: {
				deleted: { [Op.eq]: 0 },
				email: { [Op.eq]: body.email },
			},
		});

		if (user) {
			const message = `Email ${user.email} sudah terdaftar. Silahkan gunakan email lain.`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.BAD_REQUEST).json(response);
		}

		body.password = hashPassword(body.password);
		body.user_id = uuidv4();
		await UserModel.create(body);

		const token = generateAccessToken({ user_id: body.user_id, role: body.role });

		const response = <ResponseDataAttributes>ResponseData.default;
		response.data = token;
		return res.status(StatusCodes.CREATED).json(response);
	} catch (error: any) {
		console.log(error.message);
		const message = `unable to process request! error ${error.message}`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};
