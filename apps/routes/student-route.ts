import express, { Express, Request, Response } from "express";
import * as student from "../controllers/student";

export const studentRoutes = (app: Express) => {
	const route = express.Router();
	app.use("/students", route);
	route.get("/", (req: Request, res: Response) => student.findAll(req, res));
	route.get("/detail/:id", (req: Request, res: Response) => student.findOne(req, res));
	route.post("/", (req: Request, res: Response) => student.create(req, res));
	route.patch("/", (req: Request, res: Response) => student.update(req, res));
	route.delete("/", (req: Request, res: Response) => student.remove(req, res));
};
