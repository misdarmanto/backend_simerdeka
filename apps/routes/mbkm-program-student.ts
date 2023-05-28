import express, { Express, Request, Response } from "express";
import { middleware } from "../middlewares";
import * as mbkmProgram from "../controllers/mbkm-program-student";

export const mbkmProgramStudentRoutes = (app: Express) => {
	const route = express.Router();
	app.use("/mbkm-programs/students", middleware.useAuthorization, route);
	route.get("/all", (req: Request, res: Response) => mbkmProgram.findAll(req, res));
	route.get("/detail/:id", (req: Request, res: Response) =>
		mbkmProgram.findOne(req, res)
	);
	route.post("/", (req: Request, res: Response) => mbkmProgram.create(req, res));
	route.patch("/", (req: Request, res: Response) => mbkmProgram.update(req, res));
	route.delete("/", (req: Request, res: Response) => mbkmProgram.remove(req, res));
};
