import express, { Express, Request, Response } from "express";
import { middleware } from "../middlewares";
import * as mbkmLogBook from "../controllers/mbkm-log-book";

export const mbkmLogBookRoute = (app: Express) => {
	const router = express.Router();
	app.use("/mbkm-log-books", middleware.useAuthorization, router);
	router.get("/", (req: Request, res: Response) => mbkmLogBook.findAll(req, res));
	router.get("/detail/:id", (req: Request, res: Response) =>
		mbkmLogBook.findOne(req, res)
	);
	// router.post("/", (req: Request, res: Response) => mbkmLogBook.create(req, res));
	// router.patch("/", (req: Request, res: Response) => mbkmLogBook.update(req, res));
	// router.delete("/", (req: Request, res: Response) => mbkmLogBook.remove(req, res));
};
