import express, { Express, Request, Response } from "express";
import { middleware } from "../middlewares";
import * as semester from "../controllers/semester";

export const semesterRoutes = (app: Express) => {
	const router = express.Router();
	app.use("/semesters", middleware.useAuthorization, router);
	router.get("/", (req: Request, res: Response) => semester.findAll(req, res));
	router.get("/detail/:id", (req: Request, res: Response) =>
		semester.findOne(req, res)
	);
	router.get("/active", (req: Request, res: Response) =>
		semester.findActiveSemester(req, res)
	);
	router.post("/", (req: Request, res: Response) => semester.create(req, res));
	router.patch("/", (req: Request, res: Response) => semester.update(req, res));
	router.delete("/", (req: Request, res: Response) => semester.remove(req, res));
};
