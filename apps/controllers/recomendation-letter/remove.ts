import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { Op } from "sequelize";
import { requestChecker } from "../../utilities/requestCheker";
import {
	RecomendationLetterAttributes,
	RecomendationLetterModel,
} from "../../models/recomendation-letter";

export const remove = async (req: any, res: Response) => {
	const body = <RecomendationLetterAttributes>req.body;

	const emptyField = requestChecker({
		requireList: ["recomendation_letter_id"],
		requestData: body,
	});

	if (emptyField) {
		const message = `invalid request parameter! require (${emptyField})`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.BAD_REQUEST).json(response);
	}

	try {
		const recomendationLetterCheck = await RecomendationLetterModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				recomendation_letter_id: { [Op.eq]: req.query.recomendation_letter_id },
			},
		});

		if (!recomendationLetterCheck) {
			const message = `not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		await RecomendationLetterModel.update(
			{ deleted: 1 },
			{
				where: {
					recomendation_letter_id: { [Op.eq]: body.recomendation_letter_id },
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
