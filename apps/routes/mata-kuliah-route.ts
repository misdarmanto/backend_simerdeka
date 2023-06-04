import express, { Express, Request, Response } from "express";
import { middleware } from "../middlewares";
import * as mataKuliah from "../controllers/mata-kuliah";

export const mataKuliahRoute = (app: Express) => {
	const router = express.Router();
	app.use("/mata-kuliah", middleware.useAuthorization, router);
	router.get("/", (req: Request, res: Response) => mataKuliah.findAll(req, res));
	router.get("/detail/:id", (req: Request, res: Response) =>
		mataKuliah.findOne(req, res)
	);
	router.post("/", (req: Request, res: Response) => mataKuliah.create(req, res));
	router.patch("/", (req: Request, res: Response) => mataKuliah.update(req, res));
	router.delete("/", (req: Request, res: Response) => mataKuliah.remove(req, res));
};
