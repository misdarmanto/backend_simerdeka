import express, { Express, Request, Response } from "express";
import { middleware } from "../middlewares";
import * as mbkmProgram from "../controllers/mbkm-program";

export const mbkmProgramRoutes = (app: Express) => {
	const route = express.Router();
	app.use("/mbkm-programs", middleware.useAuthorization, route);
	route.get("/", (req: Request, res: Response) => mbkmProgram.findAll(req, res));
	route.get("/detail/:id", (req: Request, res: Response) =>
		mbkmProgram.findOne(req, res)
	);
	route.post("/", (req: Request, res: Response) => mbkmProgram.create(req, res));
	route.patch("/", (req: Request, res: Response) => mbkmProgram.update(req, res));
	route.delete("/", (req: Request, res: Response) => mbkmProgram.remove(req, res));
};
