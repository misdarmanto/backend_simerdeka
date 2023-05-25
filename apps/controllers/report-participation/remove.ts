import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { Op } from "sequelize";
import { requestChecker } from "../../utilities/requestCheker";
import {
	AcademicProgramAttributes,
	AcademicProgramModel,
} from "../../models/program-for-academic";

export const remove = async (req: any, res: Response) => {
	const body = <AcademicProgramAttributes>req.body;

	const emptyField = requestChecker({
		requireList: ["academic_program_id"],
		requestData: body,
	});

	if (emptyField) {
		const message = `invalid request parameter! require (${emptyField})`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.BAD_REQUEST).json(response);
	}

	try {
		const academicProgramCheck = await AcademicProgramModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				academic_program_id: { [Op.eq]: req.query.academic_program_id },
			},
		});

		if (!academicProgramCheck) {
			const message = `not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		await AcademicProgramModel.update(
			{ deleted: 1 },
			{
				where: {
					academic_program_id: { [Op.eq]: body.academic_program_id },
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
