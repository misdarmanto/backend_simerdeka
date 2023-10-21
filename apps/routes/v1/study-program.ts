/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import express, { type Express, type Request, type Response } from 'express'
import * as studyProgram from '../../controllers/study_program'

export const studyProgramRoutes = (app: Express) => {
  const route = express.Router()
  app.use('/api/v1/study-programs', route)
  route.get(
    '/',
    async (req: Request, res: Response) => await studyProgram.findAll(req, res)
  )
  route.get(
    '/detail/:id',
    async (req: Request, res: Response) => await studyProgram.findOne(req, res)
  )
  route.post(
    '/',
    async (req: Request, res: Response) => await studyProgram.create(req, res)
  )
  // route.post("/register", (req: Request, res: Response) => auth.register(req, res));
  // route.post("/login", (req: Request, res: Response) => auth.login(req, res));
  // route.get("/me/:id", (req: Request, res: Response) => auth.findOne(req, res));
}
