import express, { Express, Request, Response } from "express";
import { middleware } from "../middlewares";
import * as academicProgram from "../controllers/academic-program";

export const academicProgramRoutes = (app: Express) => {
	const route = express.Router();
	app.use("/academic-programs", middleware.useAuthorization, route);
	route.get("/all", (req: Request, res: Response) => academicProgram.findAll(req, res));
	route.get("/detail/:id", (req: Request, res: Response) =>
		academicProgram.findOne(req, res)
	);
	route.post("/", (req: Request, res: Response) => academicProgram.create(req, res));
	route.patch("/", (req: Request, res: Response) => academicProgram.update(req, res));
	route.delete("/", (req: Request, res: Response) => academicProgram.remove(req, res));
};
