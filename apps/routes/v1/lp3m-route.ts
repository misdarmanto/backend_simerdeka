/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import express, { type Express, type Request, type Response } from 'express'
import * as lp3m from '../../controllers/lp3m'

export const lp3mRoutes = (app: Express) => {
  const route = express.Router()
  app.use('/api/v1/lp3m', route)
  route.get('/', async (req: Request, res: Response) => await lp3m.findAll(req, res))
  route.get(
    '/detail/:id',
    async (req: Request, res: Response) => await lp3m.findOne(req, res)
  )
  route.post('/', async (req: Request, res: Response) => await lp3m.create(req, res))
  // route.post("/register", (req: Request, res: Response) => auth.register(req, res));
  // route.post("/login", (req: Request, res: Response) => auth.login(req, res));
  // route.get("/me/:id", (req: Request, res: Response) => auth.findOne(req, res));
}
