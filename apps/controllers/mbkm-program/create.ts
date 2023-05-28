import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { requestChecker } from "../../utilities/requestCheker";
import { v4 as uuidv4 } from "uuid";
import { MbkmProgramAttributes, MbkmProgramModel } from "../../models/mbkm-program";

export const create = async (req: any, res: Response) => {
	const body = <MbkmProgramAttributes>req.body;
	const emptyField = requestChecker({
		requireList: [
			"mbkm_program_created_by",
			"mbkm_program_name",
			"mbkm_program_category",
			"semester_id",
			"major_id",
			"study_program_id",
		],
		requestData: body,
	});

	if (emptyField) {
		const message = `invalid request parameter! require (${emptyField})`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.BAD_REQUEST).json(response);
	}

	try {
		body.mbkm_program_id = uuidv4();
		await MbkmProgramModel.create(body);
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
