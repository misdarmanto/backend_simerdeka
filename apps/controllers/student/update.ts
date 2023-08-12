import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { Op } from "sequelize";
import { requestChecker } from "../../utilities/requestCheker";
import { StudentAttributes, StudentModel } from "../../models/student";
import { StudyProgramModel } from "../../models/study-program";

export const update = async (req: any, res: Response) => {
	const body = <StudentAttributes>req.body;

	const emptyField = requestChecker({
		requireList: ["studentId"],
		requestData: body,
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

		const student = await StudentModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				studentId: { [Op.eq]: body.studentId },
			},
		});

		if (!student) {
			const message = `not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		const newData = {
			...(body.studentMbkmProgramId && {
				studentMbkmProgramId: body.studentMbkmProgramId + "",
			}),
			...(body.studentTranskripId && {
				studentTranskripId: body.studentTranskripId,
			}),
		};

		if (body.studentMbkmProgramId === null) {
			await StudentModel.update(
				{ studentMbkmProgramId: null },
				{
					where: {
						deleted: { [Op.eq]: 0 },
						studentId: { [Op.eq]: body.studentId },
					},
				}
			);
		}

		await StudentModel.update(newData, {
			where: {
				deleted: { [Op.eq]: 0 },
				studentId: { [Op.eq]: body.studentId },
			},
		});

		const response = <ResponseDataAttributes>ResponseData.default;
		response.data = { message: "success" };
		return res.status(StatusCodes.OK).json(response);
	} catch (error: any) {
		const message = `unable to process request! error ${error.message}`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};
