import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { Op } from "sequelize";
import { OrderCartModel } from "../../models/orders/cart";
import { requestChecker } from "../../utilities/requestCheker";

export const addToCart = async (req: any, res: Response) => {
	const requireList = ["x-user-id", "item_id", "category", "items"];
	const emptyField = requestChecker({
		requireList: requireList,
		requestData: { ...req.headers, ...req.body },
	});

	if (emptyField) {
		const message = `invalid request parameter! require (${emptyField})`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.BAD_REQUEST).json(response);
	}

	const categories = ["course", "subscription", "product", "showroom"];
	const isCategoryDoseNotExis = !categories.includes(req.body.category);

	if (isCategoryDoseNotExis) {
		const message = `category ${req.body.category} tidak ditemukan`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.NOT_FOUND).json(response);
	}

	if (!Array.isArray(req.body.items)) {
		const message = `items must be an array`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.BAD_REQUEST).json(response);
	}

	try {
		const checkUserCart = await OrderCartModel.findOne({
			raw: true,
			where: {
				user_id: { [Op.eq]: req.header("x-user-id") },
				item_id: { [Op.eq]: req.body.item_id },
				category: { [Op.eq]: req.body.category },
				deleted: { [Op.eq]: 0 },
			},
		});

		if (checkUserCart) {
			const message = "item sudah ditambahkan";
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.BAD_REQUEST).json(response);
		}

		const user_cart = await OrderCartModel.create({
			user_id: req.header("x-user-id"),
			item_id: req.body.item_id,
			category: req.body.category,
			items: JSON.stringify(req.body.items),
			deleted: 0,
		});

		const response = <ResponseDataAttributes>ResponseData.default;
		response.data = user_cart;
		return res.status(StatusCodes.CREATED).json(response);
	} catch (error: any) {
		console.log(error.message);
		const message = `Tidak dapat memprosess. Laporkan kendala ini! error ${error.message}`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};
