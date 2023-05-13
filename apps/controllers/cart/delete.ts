import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { Op } from "sequelize";
import { OrderCartModel } from "../../models/orders/cart";
import { requestChecker } from "../../utilities/requestCheker";

export const deleteCart = async (req: any, res: Response) => {
	const emptyField = requestChecker({ requireList: ["id"], requestData: req.query });
	if (emptyField) {
		const message = `invalid request parameter! require (${emptyField})`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.BAD_REQUEST).json(response);
	}

	try {
		await OrderCartModel.update({ deleted: 1 }, { where: { id: { [Op.eq]: req.query.id } } });
		const response = <ResponseDataAttributes>ResponseData.default;
		response.data = "item berhasil dihapus";
		return res.status(StatusCodes.OK).json(response);
	} catch (error: any) {
		console.log(error.message);
		const message = `Tidak dapat memprosess. Laporkan kendala ini! error ${error.message}`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};
