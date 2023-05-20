import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { Op } from "sequelize";
import { Pagination } from "../../utilities/pagination";
import { requestChecker } from "../../utilities/requestCheker";
import {
	RegistrationLoRAttributes,
	RegistrationLoRModel,
} from "../../models/registration-LoR";
import { UserModel } from "../../models/user";

export const findAll = async (req: any, res: Response) => {
	const emptyField = requestChecker({
		requireList: ["x-user-id"],
		requestData: req.headers,
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
			},
		});

		if (!user) {
			const message = `user not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.FORBIDDEN).json(response);
		}

		const where = {
			deleted: { [Op.eq]: 0 },
			...(req.query.search && {
				[Op.or]: [{ program_name: { [Op.like]: `%${req.query.search}%` } }],
			}),
			...(user.user_role === "mahasiswa" && {
				registration_lor_assign_to_mahasiswa: {
					[Op.eq]: 1,
				},
			}),
			...(user.user_role === "prodi" && {
				registration_lor_assign_to_prodi: {
					[Op.eq]: 1,
				},
			}),
			...(user.user_role === "jurusan" && {
				registration_lor_assign_to_jurusan: {
					[Op.eq]: 1,
				},
			}),
			...(user.user_role === "akademik" && {
				registration_lor_assign_to_akademik: {
					[Op.eq]: 1,
				},
			}),
			...(user.user_role === "biro" && {
				registration_lor_assign_to_biro: {
					[Op.eq]: 1,
				},
			}),
		};

		const page = new Pagination(+req.query.page || 0, +req.query.size || 10);
		const result = await RegistrationLoRModel.findAndCountAll({
			where,
			order: [["id", "desc"]],
			...(req.query.pagination == "true" && {
				limit: page.limit,
				offset: page.offset,
			}),
		});

		const response = <ResponseDataAttributes>ResponseData.default;
		response.data = page.data(result);
		return res.status(StatusCodes.OK).json(response);
	} catch (error: any) {
		console.log(error.message);
		const message = `unable to process request! error ${error.message}`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};

export const findOne = async (req: any, res: Response) => {
	const params = <RegistrationLoRAttributes>req.params;

	const emptyField = requestChecker({
		requireList: ["id", "x-user-id"],
		requestData: { ...req.params, ...req.headers },
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
			},
		});

		if (!user) {
			const message = `user not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.FORBIDDEN).json(response);
		}

		const where = {
			registration_lor_id: { [Op.eq]: params.id },
			deleted: { [Op.eq]: 0 },
			...(user.user_role === "mahasiswa" && {
				registration_lor_assign_to_mahasiswa: {
					[Op.eq]: 1,
				},
			}),
			...(user.user_role === "prodi" && {
				registration_lor_assign_to_prodi: {
					[Op.eq]: 1,
				},
			}),
			...(user.user_role === "jurusan" && {
				registration_lor_assign_to_jurusan: {
					[Op.eq]: 1,
				},
			}),
			...(user.user_role === "akademik" && {
				registration_lor_assign_to_akademik: {
					[Op.eq]: 1,
				},
			}),
			...(user.user_role === "biro" && {
				registration_lor_assign_to_biro: {
					[Op.eq]: 1,
				},
			}),
		};

		const registrationLoR = await RegistrationLoRModel.findOne({
			where,
		});

		if (!registrationLoR) {
			const message = `not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		const response = <ResponseDataAttributes>ResponseData.default;
		response.data = registrationLoR;
		return res.status(StatusCodes.OK).json(response);
	} catch (error: any) {
		console.log(error.message);
		const message = `unable to process request! error ${error.message}`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};
