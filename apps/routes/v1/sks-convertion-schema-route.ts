import express, { Express, Request, Response } from "express";
import { middleware } from "../../middlewares";
import * as sksConvertionSchema from "../../controllers/sks-convertion-schema";

export const sksConvertionSchemaRoutes = (app: Express) => {
	const router = express.Router();
	app.use("/api/v1/sks-convertions-schema", middleware.useAuthorization, router);
	router.get("/", (req: Request, res: Response) =>
		sksConvertionSchema.findAll(req, res)
	);
	router.post("/", (req: Request, res: Response) =>
		sksConvertionSchema.create(req, res)
	);
	router.patch("/", (req: Request, res: Response) =>
		sksConvertionSchema.update(req, res)
	);
	router.delete("/", (req: Request, res: Response) =>
		sksConvertionSchema.remove(req, res)
	);
};
