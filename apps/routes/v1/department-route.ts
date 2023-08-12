import express, { Express, Request, Response, Router } from "express";
import * as department from "../../controllers/department";

export const departmentRoutes = (app: Router) => {
	const route = express.Router();
	app.use("/api/v1/departments", route);
	route.get("/", (req: Request, res: Response) => department.findAll(req, res));
	route.get("/detail/:id", (req: Request, res: Response) =>
		department.findOne(req, res)
	);
	route.post("/", (req: Request, res: Response) => department.create(req, res));
	// route.post("/register", (req: Request, res: Response) => auth.register(req, res));
	// route.post("/login", (req: Request, res: Response) => auth.login(req, res));
	// route.get("/me/:id", (req: Request, res: Response) => auth.findOne(req, res));
};
