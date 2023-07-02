import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { Op } from "sequelize";
import { requestChecker } from "../../utilities/requestCheker";
import { StudyProgramModel } from "../../models/study-program";
import { MataKuliahModel } from "../../models/matkul";

export const remove = async (req: any, res: Response) => {
	const emptyField = requestChecker({
		requireList: ["mataKuliahId"],
		requestData: req.query,
	});

	if (emptyField) {
		const message = `invalid request parameter! require (${emptyField})`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.BAD_REQUEST).json(response);
	}

	try {
		const studyProgram = await StudyProgramModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				studyProgramId: { [Op.eq]: req.header("x-user-id") },
			},
		});

		if (!studyProgram) {
			const message = `access denied!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.UNAUTHORIZED).json(response);
		}

		const mataKuliahCheck = await MataKuliahModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				mataKuliahId: { [Op.eq]: req.query.mataKuliahId },
			},
		});

		if (!mataKuliahCheck) {
			const message = `not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		await MataKuliahModel.update(
			{ deleted: 1 },
			{
				where: {
					mataKuliahId: { [Op.eq]: req.query.mataKuliahId },
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
