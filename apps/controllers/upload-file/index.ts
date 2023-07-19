import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { CONFIG } from "../../config";

export const uploadFile = async (req: any, res: Response) => {
	try {
		const filePath = req.file.path;
		const fileUrl = `http://localhost:${CONFIG.port}/${filePath}`;
		res.json({ message: "File uploaded successfully!", fileUrl });
	} catch (error: any) {
		console.log(error.message);
		const message = `unable to process request! error ${error.message}`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};
