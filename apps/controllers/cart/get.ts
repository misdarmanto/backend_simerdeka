import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { Op, WhereOptions } from "sequelize";
import { OrderCartAttributes, OrderCartModel } from "../../models/mysql/orders/cart";
import { Pagination } from "../../utilities/pagination";
import { requestChecker } from "../../utilities/requestCheker";

export const listCart = async (req: any, res: Response) => {
	const emptyField = requestChecker({ requireList: ["x-user-id"], requestData: req.headers });

	if (emptyField) {
		const message = `invalid request parameter! require (${emptyField})`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.BAD_REQUEST).json(response);
	}

	try {
		const page = new Pagination(+req.query.page || 0, +req.query.size || 10);
		const where: WhereOptions<OrderCartAttributes> = {
			deleted: { [Op.eq]: 0 },
			user_id: { [Op.eq]: req.header("x-user-id") },
		};
		const result = {
			count: await OrderCartModel.count({
				where: where,
			}),
			rows: await OrderCartModel.findAll({
				where: where,
				order: [[req.query.order_by || "id", req.query.order_value || "desc"]],
				...(req.query.pagination == "true" && {
					limit: page.limit,
					offset: page.offset,
				}),
			}),
		};

		const response = <ResponseDataAttributes>ResponseData.default;
		response.data = page.data(result);
		return res.status(StatusCodes.OK).json(response);
	} catch (error: any) {
		console.log(error.message);
		const message = `Tidak dapat memprosess. Laporkan kendala ini! error ${error.message}`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};

export const getSingleCart = async (req: any, res: Response) => {
	const emptyField = requestChecker({
		requireList: ["id", "x-user-id"],
		requestData: { ...req.query, ...req.headers },
	});

	if (emptyField) {
		const message = `invalid request parameter! require (${emptyField})`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.BAD_REQUEST).json(response);
	}

	try {
		const cart = await OrderCartModel.findOne({
			where: {
				deleted: { [Op.eq]: 0 },
				id: { [Op.eq]: req.query.id },
				user_id: { [Op.eq]: req.header("x-user-id") },
			},
		});

		if (!cart) {
			const message = `cart item not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		const response = <ResponseDataAttributes>ResponseData.default;
		response.data = cart;
		return res.status(StatusCodes.OK).json(response);
	} catch (error: any) {
		console.log(error.message);
		const message = `Tidak dapat memprosess. Laporkan kendala ini! error ${error.message}`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};
