import express, { Express, Request, Response } from "express";
import * as lp3m from "../../controllers/lp3m";

export const lp3mRoutes = (app: Express) => {
	const route = express.Router();
	app.use("/api/v1/lp3m", route);
	route.get("/", (req: Request, res: Response) => lp3m.findAll(req, res));
	route.get("/detail/:id", (req: Request, res: Response) => lp3m.findOne(req, res));
	route.post("/", (req: Request, res: Response) => lp3m.create(req, res));
	// route.post("/register", (req: Request, res: Response) => auth.register(req, res));
	// route.post("/login", (req: Request, res: Response) => auth.login(req, res));
	// route.get("/me/:id", (req: Request, res: Response) => auth.findOne(req, res));
};
