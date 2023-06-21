import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { Op } from "sequelize";
import { StudyProgramModel } from "../../models/study-program";
import { StudentModel } from "../../models/student";
import { MbkmProgramModel } from "../../models/mbkm-program";

export const findAll = async (req: any, res: Response) => {
	try {
		const totalStudent = await StudentModel.count({
			where: { deleted: { [Op.eq]: 0 }, studentIsRegistered: { [Op.eq]: true } },
		});

		const totalStudyProgram = await StudyProgramModel.count({
			where: {
				deleted: { [Op.eq]: 0 },
				studyProgramIsRegistered: { [Op.eq]: true },
			},
		});

		const totalProgram = await MbkmProgramModel.count({
			where: { deleted: { [Op.eq]: 0 } },
		});

		const response = <ResponseDataAttributes>ResponseData.default;

		response.data = {
			totalStudent: totalStudent,
			totalStudyProgram: totalStudyProgram,
			totalProgram: totalProgram,
		};
		return res.status(StatusCodes.OK).json(response);
	} catch (error: any) {
		console.log(error.message);
		const message = `unable to process request! error ${error.message}`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};
