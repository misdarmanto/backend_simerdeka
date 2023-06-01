import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { Op } from "sequelize";
import { requestChecker } from "../../utilities/requestCheker";
import {
	RecomendationLetterAttributes,
	RecomendationLetterModel,
} from "../../models/recomendation-letter";
import { UserModel } from "../../models/user";

export const changeAssignMentStatus = async (req: any, res: Response) => {
	const body = <RecomendationLetterAttributes>req.body;

	const emptyField = requestChecker({
		requireList: ["recomendation_letter_id", "x-user-id"],
		requestData: { ...req.body, ...req.headers },
	});

	if (emptyField) {
		const message = `invalid request parameter! require (${emptyField})`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.BAD_REQUEST).json(response);
	}

	console.log(body);

	try {
		const user = await UserModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				user_id: { [Op.eq]: req.header("x-user-id") },
			},
		});

		if (user === null || user.user_role === "student") {
			const message = `access denied!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.UNAUTHORIZED).json(response);
		}

		const recomendationLetter = await RecomendationLetterModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				recomendation_letter_id: { [Op.eq]: body.recomendation_letter_id },
			},
		});

		if (!recomendationLetter) {
			const message = `recomentdation letter not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		if ("status" in req.body) {
			recomendationLetter.recomendation_letter_status = req.body.status;
			recomendationLetter.recomendation_letter_status_message =
				req.body.status_message;
		}

		const approvalLetter = body.recomendation_letter_approval_letter;

		console.log(approvalLetter);
		switch (user.user_role) {
			case "study_program":
				recomendationLetter.recomendation_letter_assign_to_department = true;
				recomendationLetter.recomendation_letter_from_study_program =
					approvalLetter;
				break;
			case "department":
				recomendationLetter.recomendation_letter_assign_to_lp3m = true;
				recomendationLetter.recomendation_letter_from_department = approvalLetter;
				break;
			case "lp3m":
				recomendationLetter.recomendation_letter_assign_to_academic = true;
				recomendationLetter.recomendation_letter_from_lp3m = approvalLetter;
				break;
			case "academic":
				recomendationLetter.recomendation_letter_status = "accepted";
				recomendationLetter.recomendation_letter_from_academic = approvalLetter;
				break;
			default:
				break;
		}

		await recomendationLetter.save();

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
