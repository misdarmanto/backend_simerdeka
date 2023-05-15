import express, { Express, Request, Response } from "express";
import { index } from "../controllers";
import { middleware } from "../middlewares";
import * as auth from "../controllers/auth";
import * as registrationProgram from "../controllers/registration-program";
import * as registrationLoR from "../controllers/registration-LoR";

export const route = (app: Express) => {
	app.get("/", (req: Request, res: Response) => index(req, res));

	const userRouter = express.Router();
	app.use("/users", userRouter);
	userRouter.post("/register", (req: Request, res: Response) => auth.register(req, res));
	userRouter.post("/login", (req: Request, res: Response) => auth.login(req, res));

	const registrationProgramRouter = express.Router();
	app.use("/registration-programs", middleware.useAuthorization, registrationProgramRouter);
	registrationProgramRouter.get("/", (req: Request, res: Response) =>
		registrationProgram.findOne(req, res)
	);
	registrationProgramRouter.get("/all", (req: Request, res: Response) =>
		registrationProgram.findAll(req, res)
	);
	registrationProgramRouter.post("/", (req: Request, res: Response) =>
		registrationProgram.create(req, res)
	);
	registrationProgramRouter.patch("/", (req: Request, res: Response) =>
		registrationProgram.update(req, res)
	);
	registrationProgramRouter.delete("/", (req: Request, res: Response) =>
		registrationProgram.remove(req, res)
	);

	const registrationLoRRouter = express.Router();
	app.use("/registration-LoR", middleware.useAuthorization, registrationLoRRouter);
	registrationLoRRouter.get("/", (req: Request, res: Response) =>
		registrationLoR.findOne(req, res)
	);
	registrationLoRRouter.get("/all", (req: Request, res: Response) =>
		registrationLoR.findAll(req, res)
	);
	registrationLoRRouter.post("/", (req: Request, res: Response) =>
		registrationLoR.create(req, res)
	);
	registrationLoRRouter.patch("/", (req: Request, res: Response) =>
		registrationLoR.update(req, res)
	);
	registrationLoRRouter.delete("/", (req: Request, res: Response) =>
		registrationLoR.remove(req, res)
	);
};
