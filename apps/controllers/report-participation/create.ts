import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { requestChecker } from "../../utilities/requestCheker";
import { v4 as uuidv4 } from "uuid";
import {
	ReportParticipationAttributes,
	ReportParticipationModel,
} from "../../models/report-participation";

export const create = async (req: any, res: Response) => {
	const body = <ReportParticipationAttributes>req.body;
	const emptyField = requestChecker({
		requireList: [
			"x-user-id",
			"x-study-program-id",
			"x-major-id",
			"report_participation_id",
			"report_participation_letter",
		],
		requestData: { ...req.body, ...req.headers },
	});

	if (emptyField) {
		const message = `invalid request parameter! require (${emptyField})`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.BAD_REQUEST).json(response);
	}

	try {
		body.report_participation_id = uuidv4();
		body.student_id = req.header("x-user-id");
		body.major_id = req.header("x-major-id");
		body.study_program_id = req.header("x-study-program-id");
		await ReportParticipationModel.create(body);

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
