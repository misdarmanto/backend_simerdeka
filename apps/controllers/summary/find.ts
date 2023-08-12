import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { Op } from "sequelize";
import { StudyProgramModel } from "../../models/study-program";
import { StudentModel } from "../../models/student";
import { MbkmProgramModel } from "../../models/mbkm-program";
import { getActiveSemester } from "../../utilities/active-semester";

export const findAll = async (req: any, res: Response) => {
	try {
		const activeSemester = await getActiveSemester();

		const totalStudent = await StudentModel.count({
			where: {
				deleted: { [Op.eq]: 0 },
				studentSemesterId: { [Op.eq]: activeSemester?.semesterId },
				studentIsRegistered: { [Op.eq]: true },
			},
		});

		const totalStudyProgram = await StudyProgramModel.count({
			where: {
				deleted: { [Op.eq]: 0 },
				studyProgramSemesterId: { [Op.eq]: activeSemester?.semesterId },
				studyProgramIsRegistered: { [Op.eq]: true },
			},
		});

		const totalProgram = await MbkmProgramModel.count({
			where: {
				deleted: { [Op.eq]: 0 },
				mbkmProgramSemesterId: { [Op.eq]: activeSemester?.semesterId },
			},
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
