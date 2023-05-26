import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { requestChecker } from "../../utilities/requestCheker";
import { v4 as uuidv4 } from "uuid";
import { ListOfMajorAttributes, ListOfMajorModel } from "../../models/list-of-major";
import { Op } from "sequelize";
import {
	ListOfStudyModelProgram,
	ListOfStudyProgramAttributes,
} from "../../models/list-study-program";

export const createMajor = async (req: any, res: Response) => {
	const body = <ListOfMajorAttributes>req.body;
	const emptyField = requestChecker({
		requireList: ["major_name"],
		requestData: body,
	});

	if (emptyField) {
		const message = `invalid request parameter! require (${emptyField})`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.BAD_REQUEST).json(response);
	}

	try {
		body.major_id = uuidv4();
		await ListOfMajorModel.create(body);
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

export const createStudyProgram = async (req: any, res: Response) => {
	const body = <ListOfStudyProgramAttributes>req.body;
	const emptyField = requestChecker({
		requireList: ["study_program_name", "major_id"],
		requestData: body,
	});

	if (emptyField) {
		const message = `invalid request parameter! require (${emptyField})`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.BAD_REQUEST).json(response);
	}

	try {
		const CheckMajor = await ListOfStudyModelProgram.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				major_id: { [Op.eq]: body.major_id },
			},
		});

		if (!CheckMajor) {
			const message = `not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		body.study_program_id = uuidv4();
		await ListOfStudyModelProgram.create(body);
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
