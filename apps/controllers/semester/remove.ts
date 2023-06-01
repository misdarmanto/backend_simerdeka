import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { Op } from "sequelize";
import { requestChecker } from "../../utilities/requestCheker";
import { SemesterModel } from "../../models/semester";
import { UserModel } from "../../models/user";

export const remove = async (req: any, res: Response) => {
	const emptyField = requestChecker({
		requireList: ["semester_id"],
		requestData: req.query,
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
				[Op.or]: [{ user_role: "academic" }, { user_role: "lp3m" }],
			},
		});

		if (!user) {
			const message = `access denied!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.UNAUTHORIZED).json(response);
		}

		const semesterCheck = await SemesterModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				semester_id: { [Op.eq]: req.query.semester_id },
			},
		});

		if (!semesterCheck) {
			const message = `semester not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		await SemesterModel.update(
			{ deleted: 1 },
			{
				where: {
					semester_id: { [Op.eq]: req.query.semester_id },
				},
			}
		);

		const newSemester = await SemesterModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
			},
			order: [["semester_status", "asc"]],
		});

		if (newSemester) {
			newSemester.semester_status = "active";
			newSemester.save();
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
