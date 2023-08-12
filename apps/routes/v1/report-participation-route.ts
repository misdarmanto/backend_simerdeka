import express, { Express, Request, Response } from "express";
import { middleware } from "../../middlewares";
import * as reportParticipation from "../../controllers/report-participation";

export const reportParticipationRoutes = (app: Express) => {
	const route = express.Router();
	app.use("/api/v1/report-participations", middleware.useAuthorization, route);
	route.get("/", (req: Request, res: Response) =>
		reportParticipation.findAll(req, res)
	);
	route.get("/detail/:id", (req: Request, res: Response) =>
		reportParticipation.findOne(req, res)
	);
	route.post("/", (req: Request, res: Response) =>
		reportParticipation.create(req, res)
	);
	route.patch("/", (req: Request, res: Response) =>
		reportParticipation.update(req, res)
	);
	route.delete("/", (req: Request, res: Response) =>
		reportParticipation.remove(req, res)
	);
};
