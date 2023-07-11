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
		requireList: ["recomendationLetterId", "x-user-id"],
		requestData: { ...req.body, ...req.headers },
	});

	if (emptyField) {
		const message = `invalid request parameter! require (${emptyField})`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.BAD_REQUEST).json(response);
	}

	try {
		const user = await UserModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				userId: { [Op.eq]: req.header("x-user-id") },
			},
		});

		if (user === null || user.userRole === "student") {
			const message = `access denied!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.UNAUTHORIZED).json(response);
		}

		const recomendationLetter = await RecomendationLetterModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				recomendationLetterId: { [Op.eq]: body.recomendationLetterId },
			},
		});

		if (!recomendationLetter) {
			const message = `recomentdation letter not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		const approvalLetter = body.recomendationLetterApprovalLetter;

		switch (user.userRole) {
			case "studyProgram":
				recomendationLetter.recomendationLetterAssignToDepartment = true;
				recomendationLetter.recomendationLetterFromStudyProgram = approvalLetter;
				break;
			case "department":
				recomendationLetter.recomendationLetterAssignToLp3m = true;
				recomendationLetter.recomendationLetterFromDepartment = approvalLetter;
				break;
			case "lp3m":
				recomendationLetter.recomendationLetterAssignToAcademic = true;
				recomendationLetter.recomendationLetterFromLp3m = approvalLetter;
				break;
			case "academic":
				recomendationLetter.recomendationLetterStatus = "accepted";
				recomendationLetter.recomendationLetterFromAcademic = approvalLetter;
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
