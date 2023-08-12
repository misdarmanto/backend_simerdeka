import express, { Express, Request, Response } from "express";
import { middleware } from "../middlewares";
import * as mbkmProgramProdi from "../controllers/mbkm-program-prodi/";

export const mbkmProgramProdiRoutes = (app: Express) => {
	const route = express.Router();
	app.use("/mbkm-programs/prodi", middleware.useAuthorization, route);
	route.get("/", (req: Request, res: Response) => mbkmProgramProdi.findAll(req, res));
	route.get("/detail/:id", (req: Request, res: Response) =>
		mbkmProgramProdi.findOne(req, res)
	);
	route.post("/", (req: Request, res: Response) => mbkmProgramProdi.create(req, res));
	route.patch("/", (req: Request, res: Response) => mbkmProgramProdi.update(req, res));
	route.delete("/", (req: Request, res: Response) => mbkmProgramProdi.remove(req, res));
};
