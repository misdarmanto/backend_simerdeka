import { Express, Request, Response } from "express";
import { index } from "../controllers";
import { semesterRoutes } from "./semester-route";
import { programRoutes } from "./program-route";
import { RecomendationLetterRoutes } from "./recomendation-letter-route";
import { userRoutes } from "./user-router";
import { academicProgramsRoutes } from "./academic-programs-route";

export const route = (app: Express) => {
	app.get("/", (req: Request, res: Response) => index(req, res));
	userRoutes(app);
	RecomendationLetterRoutes(app);
	programRoutes(app);
	semesterRoutes(app);
	academicProgramsRoutes(app);
};
