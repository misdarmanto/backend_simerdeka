import express, { Express, Request, Response } from "express";
import { uploadFile } from "../controllers/upload-file";
import { uploadMidleWare } from "../utilities/upload-file";

export const uploadFileRoutes = (app: Express) => {
	const route = express.Router();
	app.use("/upload-file", route);
	route.post("/", uploadMidleWare.single("file"), (req: Request, res: Response) =>
		uploadFile(req, res)
	);
};
