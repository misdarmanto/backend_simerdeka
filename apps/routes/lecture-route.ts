import express, { Express, Request, Response } from "express";
import { LectureController } from "../controllers/lecture";

export const lectureRoutes = (app: Express) => {
	const route = express.Router();
	app.use("/lectures", route);
	route.get("/", (req: Request, res: Response) => LectureController.findAll(req, res));
	route.get("/:lectureCode", (req: Request, res: Response) =>
		LectureController.findOne(req, res)
	);
};
