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
		requireList: ["recomendationLetterId"],
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
				recomendationLetterId: { [Op.eq]: req.query.recomendationLetterId },
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
					recomendationLetterId: { [Op.eq]: body.recomendationLetterId },
				},
			}
		);

		const response = <ResponseDataAttributes>ResponseData.default;
		response.data = { message: "success" };
		return res.status(StatusCodes.OK).json(response);
	} catch (error: any) {
		const message = `unable to process request! error ${error.message}`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};
