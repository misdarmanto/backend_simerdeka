import express, { Express, Request, Response } from "express";
import { index } from "../controllers";
import { middleware } from "../middlewares";
import { ORDER_CART } from "../controllers/cart";

export const route = (app: Express) => {
	app.get("/", middleware.useAuthorization, (req: Request, res: Response) => index(req, res));

	const oderRouter = express.Router();
	app.use("/order", middleware.useAuthorization, oderRouter);
	oderRouter.get("/cart/list", (req: Request, res: Response) => ORDER_CART.list(req, res));
	oderRouter.get("/cart", (req: Request, res: Response) => ORDER_CART.single(req, res));
	oderRouter.post("/cart", (req: Request, res: Response) => ORDER_CART.add(req, res));
	oderRouter.delete("/cart", (req: Request, res: Response) => ORDER_CART.delete(req, res));
};
