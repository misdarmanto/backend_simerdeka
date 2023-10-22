/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import express, { type Express, type Request, type Response } from 'express'
import * as academic from '../../controllers/academic'

export const academicRoutes = (app: Express): void => {
  const route = express.Router()
  app.use('/api/v1/academics', route)
  route.get('/', async (req: Request, res: Response) => await academic.findAll(req, res))
  route.get(
    '/detail/:id',
    async (req: Request, res: Response) => await academic.findOne(req, res)
  )
  route.post('/', async (req: Request, res: Response) => await academic.create(req, res))
  // route.post("/register", (req: Request, res: Response) => auth.register(req, res));
  // route.post("/login", (req: Request, res: Response) => auth.login(req, res));
  // route.get("/me/:id", (req: Request, res: Response) => auth.findOne(req, res));
}
