import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { requestChecker } from "../../utilities/requestCheker";
import { v4 as uuidv4 } from "uuid";
import { Op } from "sequelize";
import { UserModel } from "../../models/user";
import { TranskripAttributes, TranskripModel } from "../../models/transkrip";
import { StudentModel } from "../../models/student";

export const create = async (req: any, res: Response) => {
	const body = <TranskripAttributes>req.body;
	const emptyField = requestChecker({
		requireList: ["x-user-id", "transkripStudentId", "transkripMataKuliahId"],
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
				user_id: { [Op.eq]: req.header("x-user-id") },
				user_role: { [Op.eq]: "study_program" },
			},
		});

		if (!user) {
			const message = `access denied!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.UNAUTHORIZED).json(response);
		}

		const student = await StudentModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				student_id: { [Op.eq]: body.transkripStudentId },
				student_is_registered: { [Op.eq]: true },
			},
		});

		if (!student) {
			const message = `student not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		body.transkripId = uuidv4();
		body.transkripStudentId = student.student_id;
		body.transkripMataKuliahId = body.transkripMataKuliahId;
		body.transkripStudyProgramId = student.student_study_program_id;
		body.transkripDepartmentId = student.student_department_id;
		await TranskripModel.create(body);

		const response = <ResponseDataAttributes>ResponseData.default;
		response.data = { message: "success" };
		return res.status(StatusCodes.CREATED).json(response);
	} catch (error: any) {
		console.log(error.message);
		const message = `unable to process request! error ${error.message}`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};
