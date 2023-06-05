import express, { Express, Request, Response } from "express";
import { middleware } from "../middlewares";
import * as transkrip from "../controllers/transkrip";

export const transkripRoute = (app: Express) => {
	const router = express.Router();
	app.use("/transkrip", middleware.useAuthorization, router);
	router.get("/", (req: Request, res: Response) => transkrip.findAll(req, res));
	router.get("/detail/:id", (req: Request, res: Response) =>
		transkrip.findOne(req, res)
	);
	router.post("/", (req: Request, res: Response) => transkrip.create(req, res));
	router.patch("/", (req: Request, res: Response) => transkrip.update(req, res));
	router.delete("/", (req: Request, res: Response) => transkrip.remove(req, res));
};
