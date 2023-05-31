import { Express, Request, Response } from "express";
import { index } from "../controllers";
import { semesterRoutes } from "./semester-route";
import { RecomendationLetterRoutes } from "./recomendation-letter-route";
import { userRoutes } from "./user-router";
import { majorsAndStudyPrograms } from "./majors-and-study-programs";
import { reportParticipationRoutes } from "./report-participation-route";
import { mbkmProgramRoutes } from "./mbkm-program";
import { mbkmProgramStudentRoutes } from "./mbkm-program-student";
import { sksConvertionRoutes } from "./sks-convertion-route";

export const route = (app: Express) => {
	app.get("/", (req: Request, res: Response) => index(req, res));
	userRoutes(app);
	RecomendationLetterRoutes(app);
	semesterRoutes(app);
	majorsAndStudyPrograms(app);
	reportParticipationRoutes(app);
	mbkmProgramRoutes(app);
	mbkmProgramStudentRoutes(app);
	sksConvertionRoutes(app);
	mbkmProgramRoutes(app);
};
