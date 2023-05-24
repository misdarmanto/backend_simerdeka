import express, { Express, Request, Response } from "express";
import { middleware } from "../middlewares";
import * as programForMajor from "../controllers/program-for-major";

export const programForMajorRoutes = (app: Express) => {
	const route = express.Router();
	app.use("/major-programs", middleware.useAuthorization, route);
	route.get("/all", (req: Request, res: Response) => programForMajor.findAll(req, res));
	route.get("/detail/:id", (req: Request, res: Response) =>
		programForMajor.findOne(req, res)
	);
	route.post("/", (req: Request, res: Response) => programForMajor.create(req, res));
	route.patch("/", (req: Request, res: Response) => programForMajor.update(req, res));
	route.delete("/", (req: Request, res: Response) => programForMajor.remove(req, res));
};
