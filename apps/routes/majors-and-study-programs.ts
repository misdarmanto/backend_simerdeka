import express, { Express, Request, Response } from "express";
import { middleware } from "../middlewares";
import * as academicPrograms from "../controllers/majors-and-study-programs";

export const majorsAndStudyPrograms = (app: Express) => {
	const router = express.Router();
	app.use("/itera", middleware.useAuthorization, router);
	router.get("/", (req: Request, res: Response) => academicPrograms.findAll(req, res));
	router.get("/majors", (req: Request, res: Response) =>
		academicPrograms.findAllMajor(req, res)
	);
	router.post("/majors", (req: Request, res: Response) =>
		academicPrograms.createMajor(req, res)
	);
	router.get("/study-programs", (req: Request, res: Response) =>
		academicPrograms.findAllStudyProgram(req, res)
	);
	router.get("/study-programs/major", (req: Request, res: Response) =>
		academicPrograms.findStudyProgramByMajor(req, res)
	);
	router.post("/study-programs", (req: Request, res: Response) =>
		academicPrograms.createStudyProgram(req, res)
	);
};
