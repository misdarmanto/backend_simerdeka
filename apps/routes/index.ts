import express, { Express, Request, Response } from "express";
import { index } from "../controllers";
import { middleware } from "../middlewares";
import * as auth from "../controllers/auth";
import * as program from "../controllers/program";
import * as letterOfRecomendation from "../controllers/registration-LoR";

export const route = (app: Express) => {
	app.get("/", (req: Request, res: Response) => index(req, res));

	const userRouter = express.Router();
	app.use("/users", userRouter);
	userRouter.post("/register", (req: Request, res: Response) =>
		auth.register(req, res)
	);
	userRouter.post("/login", (req: Request, res: Response) => auth.login(req, res));
	userRouter.get("/me/:id", (req: Request, res: Response) => auth.findOne(req, res));

	const programRouter = express.Router();
	app.use("/programs", middleware.useAuthorization, programRouter);
	programRouter.get("/all", (req: Request, res: Response) => program.findAll(req, res));
	programRouter.get("/detail/:id", (req: Request, res: Response) =>
		program.findOne(req, res)
	);
	programRouter.post("/", (req: Request, res: Response) => program.create(req, res));
	programRouter.patch("/", (req: Request, res: Response) => program.update(req, res));
	programRouter.delete("/", (req: Request, res: Response) => program.remove(req, res));

	const letterOfRecomendationRouter = express.Router();
	app.use(
		"/registration-LoR",
		middleware.useAuthorization,
		letterOfRecomendationRouter
	);

	letterOfRecomendationRouter.get("/all", (req: Request, res: Response) =>
		letterOfRecomendation.findAll(req, res)
	);
	letterOfRecomendationRouter.get("/detail/:id", (req: Request, res: Response) =>
		letterOfRecomendation.findOne(req, res)
	);
	letterOfRecomendationRouter.post("/", (req: Request, res: Response) =>
		letterOfRecomendation.create(req, res)
	);
	letterOfRecomendationRouter.patch("/", (req: Request, res: Response) =>
		letterOfRecomendation.update(req, res)
	);
	letterOfRecomendationRouter.delete("/", (req: Request, res: Response) =>
		letterOfRecomendation.remove(req, res)
	);
	letterOfRecomendationRouter.patch("/change-status", (req: Request, res: Response) =>
		letterOfRecomendation.changeAssignMentStatus(req, res)
	);
};
