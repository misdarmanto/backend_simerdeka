import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { requestChecker } from "../../utilities/requestCheker";
import { v4 as uuidv4 } from "uuid";
import { StudentAttributes, StudentModel } from "../../models/student";

export const create = async (req: any, res: Response) => {
	const body = <StudentAttributes>req.body;

	const emptyField = requestChecker({
		requireList: [
			"student_name",
			"student_nim",
			"student_email",
			"student_department_id",
			"student_department_name",
			"student_study_program_id",
			"student_study_program_name",
		],
		requestData: body,
	});

	if (emptyField) {
		const message = `invalid request parameter! require (${emptyField})`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.BAD_REQUEST).json(response);
	}

	try {
		// const users = req.body.users.map((user: UserAttributes) => ({
		// 	...user,
		// 	user_id: uuidv4(),
		// }));
		// await UserModel.bulkCreate(users);

		body.student_id = uuidv4();
		await StudentModel.create(body);
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
