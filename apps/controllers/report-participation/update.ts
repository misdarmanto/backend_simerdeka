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
import { StudentModel } from "../../models/student";
import { StudyProgramModel } from "../../models/study-program";
import { getActiveSemester } from "../../utilities/active-semester";

export const update = async (req: any, res: Response) => {
	const body = <ReportParticipationAttributes>req.body;

	const emptyField = requestChecker({
		requireList: ["reportParticipationId", "x-user-id"],
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
				userRole: { [Op.eq]: "academic" },
			},
		});

		if (!user) {
			const message = `access denied!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.UNAUTHORIZED).json(response);
		}

		const reportParticipation = await ReportParticipationModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				reportParticipationId: { [Op.eq]: body.reportParticipationId },
			},
		});

		if (!reportParticipation) {
			const message = `not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		const newData: ReportParticipationAttributes = {
			...(req.body.reportParticipationLetter && {
				reportParticipationLetter: body.reportParticipationLetter,
			}),
			...(req.body.reportParticipationStatus && {
				reportParticipationStatus: body.reportParticipationStatus,
			}),
			...(req.body.reportParticipationStatusMessage && {
				reportParticipationStatusMessage: body.reportParticipationStatusMessage,
			}),
		};

		await ReportParticipationModel.update(newData, {
			where: {
				deleted: { [Op.eq]: 0 },
				reportParticipationId: { [Op.eq]: body.reportParticipationId },
			},
		});

		if (req.body.reportParticipationStatus === "accepted") {
			const student = await StudentModel.findOne({
				where: {
					deleted: { [Op.eq]: 0 },
					studentId: {
						[Op.eq]: reportParticipation.reportParticipationStudentId,
					},
				},
			});

			const activeSemester = await getActiveSemester();

			const studyProgram = await StudyProgramModel.findOne({
				where: {
					deleted: { [Op.eq]: 0 },
					studyProgramId: {
						[Op.eq]: reportParticipation.reportParticipationStudyProgramId,
					},
				},
			});

			if (student && activeSemester) {
				student.studentSemesterId = activeSemester.semesterId
				student.studentIsRegistered = true;
				student.save();
			}

			

			if (studyProgram && activeSemester) {
				studyProgram.studyProgramSemesterId = activeSemester.semesterId;
				studyProgram.studyProgramIsRegistered = true;
				studyProgram.save();
			}
		}

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
