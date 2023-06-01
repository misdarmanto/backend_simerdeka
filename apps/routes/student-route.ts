import express, { Express, Request, Response } from "express";
import * as student from "../controllers/student";

export const studentRoutes = (app: Express) => {
	const route = express.Router();
	app.use("/students", route);
	route.get("/", (req: Request, res: Response) => student.findAll(req, res));
	route.get("/detail/:id", (req: Request, res: Response) => student.findOne(req, res));
	route.post("/", (req: Request, res: Response) => student.create(req, res));
	// route.post("/register", (req: Request, res: Response) => auth.register(req, res));
	// route.post("/login", (req: Request, res: Response) => auth.login(req, res));
	// route.get("/me/:id", (req: Request, res: Response) => auth.findOne(req, res));
};
