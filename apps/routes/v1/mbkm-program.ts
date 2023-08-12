import express, { Express, Request, Response } from "express";
import { middleware } from "../../middlewares";
import * as mbkmProgram from "../../controllers/mbkm-program";
import * as mbkmProgramProdi from "../../controllers/mbkm-program-prodi";

export const mbkmProgramRoutes = (app: Express) => {
	const route = express.Router();
	app.use("/api/v1/mbkm-programs", middleware.useAuthorization, route);
	route.get("/", (req: Request, res: Response) => mbkmProgram.findAll(req, res));
	route.get("/detail/:id", (req: Request, res: Response) =>
		mbkmProgram.findOne(req, res)
	);
	route.post("/", (req: Request, res: Response) => mbkmProgram.create(req, res));
	route.patch("/", (req: Request, res: Response) => mbkmProgram.update(req, res));
	route.delete("/", (req: Request, res: Response) => mbkmProgram.remove(req, res));

	route.get("/prodi", (req: Request, res: Response) =>
		mbkmProgramProdi.findAll(req, res)
	);
	route.get("/prodi/detail/:id", (req: Request, res: Response) =>
		mbkmProgramProdi.findOne(req, res)
	);
	route.post("/prodi", (req: Request, res: Response) =>
		mbkmProgramProdi.create(req, res)
	);
	route.delete("/prodi", (req: Request, res: Response) =>
		mbkmProgramProdi.remove(req, res)
	);
};
