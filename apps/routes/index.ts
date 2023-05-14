import express, { Express, Request, Response } from "express";
import { index } from "../controllers";
import { middleware } from "../middlewares";
import * as USER from "../controllers/user";

export const route = (app: Express) => {
	app.get("/", middleware.useAuthorization, (req: Request, res: Response) => index(req, res));

	const userRouter = express.Router();
	app.use("/user", userRouter);
	userRouter.post("/register", (req: Request, res: Response) => USER.register(req, res));
	userRouter.post("/login", (req: Request, res: Response) => USER.login(req, res));
	userRouter.post("/logout", (req: Request, res: Response) => USER.logout(req, res));

	userRouter.get("/test", middleware.useAuthorization, (req: Request, res: Response) => req);
};
