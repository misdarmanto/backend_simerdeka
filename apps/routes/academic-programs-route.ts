import express, { Express, Request, Response } from "express";
import { middleware } from "../middlewares";
import * as academicPrograms from "../controllers/academic-programs";

export const academicProgramsRoutes = (app: Express) => {
	const router = express.Router();
	app.use("/academic-programs", middleware.useAuthorization, router);
	router.get("/", (req: Request, res: Response) => academicPrograms.findAll(req, res));
	router.get("/jurusan", (req: Request, res: Response) =>
		academicPrograms.findAllJurusan(req, res)
	);
	router.get("/prodi", (req: Request, res: Response) =>
		academicPrograms.findAllProdi(req, res)
	);
	router.post("/jurusan", (req: Request, res: Response) =>
		academicPrograms.createJurusan(req, res)
	);
	router.post("/prodi", (req: Request, res: Response) =>
		academicPrograms.createProdi(req, res)
	);
};
