import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { v4 as uuidv4 } from "uuid";
import { UserAttributes, UserModel } from "../../models/user";

export const create = async (req: any, res: Response) => {
	const body = <UserAttributes>req.body;

	try {
		const users = req.body.users.map((user: UserAttributes) => ({
			...user,
			userId: uuidv4(),
		}));
		await UserModel.bulkCreate(users);
		const response = <ResponseDataAttributes>ResponseData.default;
		response.data = { message: "success" };
		return res.status(StatusCodes.CREATED).json(response);
	} catch (error: any) {
		const message = `unable to process request! error ${error.message}`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};
