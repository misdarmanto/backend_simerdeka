import express, { Express, Request, Response } from "express";
import { middleware } from "../middlewares";
import * as letterOfRecomendation from "../controllers/registration-LoR";

export const letterOfRecomendationRoutes = (app: Express) => {
	const route = express.Router();
	app.use("/registration-LoR", middleware.useAuthorization, route);

	route.get("/all", (req: Request, res: Response) =>
		letterOfRecomendation.findAll(req, res)
	);
	route.get("/detail/:id", (req: Request, res: Response) =>
		letterOfRecomendation.findOne(req, res)
	);
	route.post("/", (req: Request, res: Response) =>
		letterOfRecomendation.create(req, res)
	);
	route.patch("/", (req: Request, res: Response) =>
		letterOfRecomendation.update(req, res)
	);
	route.delete("/", (req: Request, res: Response) =>
		letterOfRecomendation.remove(req, res)
	);
	route.patch("/change-status", (req: Request, res: Response) =>
		letterOfRecomendation.changeAssignMentStatus(req, res)
	);
};
