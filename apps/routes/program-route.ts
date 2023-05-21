import express, { Express, Request, Response } from "express";
import { middleware } from "../middlewares";
import * as program from "../controllers/program";

export const programRoutes = (app: Express) => {
	const route = express.Router();
	app.use("/programs", middleware.useAuthorization, route);
	route.get("/all", (req: Request, res: Response) => program.findAll(req, res));
	route.get("/detail/:id", (req: Request, res: Response) => program.findOne(req, res));
	route.post("/", (req: Request, res: Response) => program.create(req, res));
	route.patch("/", (req: Request, res: Response) => program.update(req, res));
	route.delete("/", (req: Request, res: Response) => program.remove(req, res));
	route.get("/my-programs", (req: Request, res: Response) =>
		program.findAllMyProgram(req, res)
	);
	route.get("/my-programs/detail/:id", (req: Request, res: Response) =>
		program.findMyProgram(req, res)
	);
};
