import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../utilities/response";
import { CONFIG } from "../config";

export const useAuthorization = (req: Request, res: Response, next: NextFunction) => {
	try {
		if (
			!req.header("authorization") ||
			req.header("authorization")?.indexOf("Basic ") === -1
		) {
			const message = "Missing Authorization.";
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.BAD_REQUEST).json(response);
		}
		const base64Credentials = req.header("authorization")?.split(" ")[1];
		const credentials = Buffer.from(base64Credentials || ":", "base64").toString(
			"ascii"
		);
		const [username, password] = credentials.split(":");

		if (
			username != CONFIG.authorization.username ||
			password != CONFIG.authorization.passsword
		) {
			const message = "Invalid Authorization.";
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.UNAUTHORIZED).json(response);
		}
		next();
	} catch (error) {
		console.log(error);
		const message = "Tidak dapat memproses permintaan. Laporkan kendala ini.";
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};

// export const useAuthorization = (req: Request | any, res: Response, next: NextFunction) => {
// 	try {
// 		if (
// 			!req.header("authorization") ||
// 			req.header("authorization").split(" ")[0] !== "Bearer"
// 		) {
// 			const message = "Missing Authorization.";
// 			const response = <ResponseDataAttributes>ResponseData.error(message);
// 			return res.status(StatusCodes.UNAUTHORIZED).json(response);
// 		}

// 		const token = req.header("authorization")?.split(" ")[1];
// 		const user = verifyAccessToken(token);

// 		if (!user) {
// 			const message = "Invalid Authorization.";
// 			const response = <ResponseDataAttributes>ResponseData.error(message);
// 			return res.status(StatusCodes.UNAUTHORIZED).json(response);
// 		}
// 		req.user = user;
// 		console.log(req.user);
// 		next();
// 	} catch (error) {
// 		console.log(error);
// 		const message = "Tidak dapat memproses permintaan. Laporkan kendala ini.";
// 		const response = <ResponseDataAttributes>ResponseData.error(message);
// 		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
// 	}
// };
