import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { Op } from "sequelize";
import { ProgramAttributes, ProgramModel } from "../../models/program";
import { requestChecker } from "../../utilities/requestCheker";

export const remove = async (req: any, res: Response) => {
	const body = <ProgramAttributes>req.body;

	const emptyField = requestChecker({
		requireList: ["program_id"],
		requestData: body,
	});

	if (emptyField) {
		const message = `invalid request parameter! require (${emptyField})`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.BAD_REQUEST).json(response);
	}

	try {
		const registrationCheck = await ProgramModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				program_id: { [Op.eq]: req.query.program_id },
			},
		});

		if (!registrationCheck) {
			const message = `not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		await ProgramModel.update(
			{ deleted: 1 },
			{
				where: {
					program_id: { [Op.eq]: body.program_id },
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
