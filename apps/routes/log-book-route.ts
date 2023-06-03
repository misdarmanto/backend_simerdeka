import express, { Express, Request, Response } from "express";
import { middleware } from "../middlewares";
import * as logBook from "../controllers/log-book";

export const logBookRoute = (app: Express) => {
	const router = express.Router();
	app.use("/log-books", middleware.useAuthorization, router);
	router.get("/", (req: Request, res: Response) => logBook.findAll(req, res));
	router.get("/detail/:id", (req: Request, res: Response) => logBook.findOne(req, res));
	router.post("/", (req: Request, res: Response) => logBook.create(req, res));
	router.patch("/", (req: Request, res: Response) => logBook.update(req, res));
	router.delete("/", (req: Request, res: Response) => logBook.remove(req, res));
};
