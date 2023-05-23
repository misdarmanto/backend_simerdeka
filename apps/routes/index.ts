import { Express, Request, Response } from "express";
import { index } from "../controllers";
import { semesterRoutes } from "./semester-route";
import { RecomendationLetterRoutes } from "./recomendation-letter-route";
import { userRoutes } from "./user-router";
import { majorsAndStudyPrograms } from "./majors-and-study-programs";
import { academicProgramRoutes } from "./academic-program-route";

export const route = (app: Express) => {
	app.get("/", (req: Request, res: Response) => index(req, res));
	userRoutes(app);
	RecomendationLetterRoutes(app);
	academicProgramRoutes(app);
	semesterRoutes(app);
	majorsAndStudyPrograms(app);
};
