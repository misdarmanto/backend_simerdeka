import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { requestChecker } from "../../utilities/requestCheker";
import { v4 as uuidv4 } from "uuid";
import { SksConvertionAttributes, SksConvertionModel } from "../../models/sks-convertion";

export const create = async (req: any, res: Response) => {
	const body = <SksConvertionAttributes>req.body;
	// const emptyField = requestChecker({
	// 	requireList: [
	// 		"sks_convertion_total",
	// 		"sks_convertion_student_id",
	// 		"sks_convertion_program_id",
	// 	],
	// 	requestData: body,
	// });

	// if (emptyField) {
	// 	const message = `invalid request parameter! require (${emptyField})`;
	// 	const response = <ResponseDataAttributes>ResponseData.error(message);
	// 	return res.status(StatusCodes.BAD_REQUEST).json(response);
	// }

	try {
		const listSks = req.body.map((item: SksConvertionAttributes) => {
			return {
				...item,
				sks_convertion_id: uuidv4(),
			};
		});

		await SksConvertionModel.bulkCreate(listSks);
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
