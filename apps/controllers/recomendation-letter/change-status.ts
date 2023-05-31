import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { Op } from "sequelize";
import { requestChecker } from "../../utilities/requestCheker";
import { RecomendationLetterModel } from "../../models/recomendation-letter";
import { UserModel } from "../../models/user";

export const changeAssignMentStatus = async (req: any, res: Response) => {
	const emptyField = requestChecker({
		requireList: ["student_id", "recomendation_letter_id"],
		requestData: req.body,
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
				user_id: { [Op.eq]: req.body.student_id },
			},
		});

		if (!user) {
			const message = `not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		const recomendationLetter = await RecomendationLetterModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				recomendation_letter_id: { [Op.eq]: req.body.recomendation_letter_id },
			},
		});

		if (!recomendationLetter) {
			const message = `not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		const defaultMessage = "surat rekomendasi telah diteruskan ke";

		switch (req.body.assign_to) {
			case "student":
				recomendationLetter.recomendation_letter_assign_to_student = true;
				break;
			case "study_program":
				recomendationLetter.recomendation_letter_assign_to_study_program = true;
				recomendationLetter.recomendation_letter_status_message =
					"Sedang menunggu persetujuan prodi";
				break;
			case "major":
				recomendationLetter.recomendation_letter_assign_to_major = true;
				recomendationLetter.recomendation_letter_status_message =
					defaultMessage + " jurusan";

				recomendationLetter.recomendation_letter_from_study_program =
					req.body.approval_letter;
				break;
			case "lp3m":
				recomendationLetter.recomendation_letter_assign_to_lp3m = true;
				recomendationLetter.recomendation_letter_status_message =
					defaultMessage + " LP3M";

				recomendationLetter.recomendation_letter_from_major =
					req.body.approval_letter;
				break;
			case "academic":
				recomendationLetter.recomendation_letter_assign_to_academic = true;
				recomendationLetter.recomendation_letter_from_academic =
					req.body.approval_letter;
				recomendationLetter.recomendation_letter_status_message =
					defaultMessage + " Akademik";
				break;
			case "done":
				recomendationLetter.recomendation_letter_from_academic =
					req.body.approval_letter;
				recomendationLetter.recomendation_letter_status = "accepted";
				recomendationLetter.recomendation_letter_status_message =
					"Selamat, surat rekomendasi mu telah disetujui";
				user.user_is_registered = true;
				await user.save();
				break;
			default:
				break;
		}

		if ("status" in req.body) {
			recomendationLetter.recomendation_letter_status = req.body.status;
			recomendationLetter.recomendation_letter_status_message =
				req.body.status_message;
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
