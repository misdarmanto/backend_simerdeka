import express, { Express, Request, Response } from "express";
import * as auth from "../controllers/auth";

export const userRoutes = (app: Express) => {
	const route = express.Router();
	app.use("/users", route);
	route.post("/register", (req: Request, res: Response) => auth.register(req, res));
	route.post("/login", (req: Request, res: Response) => auth.login(req, res));
	route.get("/me/:id", (req: Request, res: Response) => auth.findOne(req, res));
};
