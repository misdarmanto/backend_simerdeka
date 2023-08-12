import express, { Express, Request, Response } from "express";
import * as studyProgram from "../../controllers/study_program";

export const studyProgramRoutes = (app: Express) => {
	const route = express.Router();
	app.use("/api/v1/study-programs", route);
	route.get("/", (req: Request, res: Response) => studyProgram.findAll(req, res));
	route.get("/detail/:id", (req: Request, res: Response) =>
		studyProgram.findOne(req, res)
	);
	route.post("/", (req: Request, res: Response) => studyProgram.create(req, res));
	// route.post("/register", (req: Request, res: Response) => auth.register(req, res));
	// route.post("/login", (req: Request, res: Response) => auth.login(req, res));
	// route.get("/me/:id", (req: Request, res: Response) => auth.findOne(req, res));
};
