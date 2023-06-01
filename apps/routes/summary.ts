import express, { Express, Request, Response } from "express";
import * as summaries from "../controllers/summary";

export const summaryRoutes = (app: Express) => {
	const route = express.Router();
	app.use("/summaries", route);
	route.get("/", (req: Request, res: Response) => summaries.findAll(req, res));
};
