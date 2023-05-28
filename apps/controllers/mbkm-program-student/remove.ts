import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { Op } from "sequelize";
import { requestChecker } from "../../utilities/requestCheker";
import { MbkmProgramAttributes, MbkmProgramModel } from "../../models/mbkm-program";

export const remove = async (req: any, res: Response) => {
	const body = <MbkmProgramAttributes>req.body;

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
		const academicProgramCheck = await MbkmProgramModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				mbkm_program_id: { [Op.eq]: req.query.mbkm_program_id },
			},
		});

		if (!academicProgramCheck) {
			const message = `not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		await MbkmProgramModel.update(
			{ deleted: 1 },
			{
				where: {
					mbkm_program_id: { [Op.eq]: body.mbkm_program_id },
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
