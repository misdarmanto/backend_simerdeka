import express, { Express, Request, Response } from "express";
import { middleware } from "../../middlewares";
import * as letterOfRecomendation from "../../controllers/recomendation-letter";

export const RecomendationLetterRoutes = (app: Express) => {
	const route = express.Router();
	app.use("/api/v1/recomendation-letters", middleware.useAuthorization, route);

	route.get("/", (req: Request, res: Response) =>
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
	route.patch("/change-status-assignment", (req: Request, res: Response) =>
		letterOfRecomendation.changeAssignMentStatus(req, res)
	);
	route.patch("/change-status-approval", (req: Request, res: Response) =>
		letterOfRecomendation.changeStatusApproval(req, res)
	);
};
