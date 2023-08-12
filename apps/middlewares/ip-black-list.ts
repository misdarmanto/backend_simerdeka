import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../utilities/response";
import { CONFIG } from "../configs";

export const ipBlackList = async (req: Request, res: Response, next: NextFunction) => {
	try {
		if (CONFIG.ipBlackList.indexOf(req.ip) > -1) {
			const message = `access denied for this ip address`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.UNAUTHORIZED).json(response);
		}
		next();
	} catch (error: any) {
		console.log(error.message);
		const message = `unable to process request! error ${error.message}`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};
