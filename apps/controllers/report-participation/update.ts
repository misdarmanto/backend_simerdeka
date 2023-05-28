import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { Op } from "sequelize";
import { requestChecker } from "../../utilities/requestCheker";
import {
	ReportParticipationAttributes,
	ReportParticipationModel,
} from "../../models/report-participation";
import { UserModel } from "../../models/user";

export const update = async (req: any, res: Response) => {
	const body = <ReportParticipationAttributes>req.body;

	const emptyField = requestChecker({
		requireList: ["report_participation_id"],
		requestData: body,
	});

	if (emptyField) {
		const message = `invalid request parameter! require (${emptyField})`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.BAD_REQUEST).json(response);
	}

	try {
		const reportParticipation = await ReportParticipationModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				report_participation_id: { [Op.eq]: body.report_participation_id },
			},
		});

		if (!reportParticipation) {
			const message = `not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		const newData: ReportParticipationAttributes = {
			...(req.body.report_participation_letter && {
				report_participation_letter: body.report_participation_letter,
			}),
			...(req.body.report_participation_status && {
				report_participation_status: body.report_participation_status,
			}),
			...(req.body.report_participation_status_message && {
				report_participation_status_message:
					body.report_participation_status_message,
			}),
		};

		await ReportParticipationModel.update(newData, {
			where: {
				deleted: { [Op.eq]: 0 },
				report_participation_id: { [Op.eq]: body.report_participation_id },
			},
		});

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
