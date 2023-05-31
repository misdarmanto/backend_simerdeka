import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { requestChecker } from "../../utilities/requestCheker";
import { v4 as uuidv4 } from "uuid";
import { MbkmLogBookAttributes, MbkmLogBookModel } from "../../models/mbkm-log-book";

export const create = async (req: any, res: Response) => {
	const body = <MbkmLogBookAttributes>req.body;
	const emptyField = requestChecker({
		requireList: [
			"mbkm_log_book_week",
			"mbkm_log_book_student_id",
			"mbkm_log_book_file",
		],
		requestData: body,
	});

	if (emptyField) {
		const message = `invalid request parameter! require (${emptyField})`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.BAD_REQUEST).json(response);
	}

	try {
		body.mbkm_log_book_id = uuidv4();
		await MbkmLogBookModel.create(body);
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
