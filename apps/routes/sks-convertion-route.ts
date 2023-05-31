import express, { Express, Request, Response } from "express";
import { middleware } from "../middlewares";
import * as sksConvertion from "../controllers/sks-convertion";

export const sksConvertionRoutes = (app: Express) => {
	const router = express.Router();
	app.use("/sks-convertions", middleware.useAuthorization, router);
	router.get("/", (req: Request, res: Response) => sksConvertion.findAll(req, res));
	router.get("/detail/:id", (req: Request, res: Response) =>
		sksConvertion.findOne(req, res)
	);
	router.get("/students/detail/:id", (req: Request, res: Response) =>
		sksConvertion.findStudent(req, res)
	);
	router.post("/", (req: Request, res: Response) => sksConvertion.create(req, res));
	router.patch("/", (req: Request, res: Response) => sksConvertion.update(req, res));
	router.delete("/", (req: Request, res: Response) => sksConvertion.remove(req, res));
};
