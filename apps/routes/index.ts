import { Express, Request, Response } from "express";
import { index } from "../controllers";
import { semesterRoutes } from "./semester-route";
import { programRoutes } from "./program-route";
import { letterOfRecomendationRoutes } from "./letter-of-recomendation-route";
import { userRoutes } from "./user-router";

export const route = (app: Express) => {
	app.get("/", (req: Request, res: Response) => index(req, res));
	userRoutes(app);
	letterOfRecomendationRoutes(app);
	programRoutes(app);
	semesterRoutes(app);
};
