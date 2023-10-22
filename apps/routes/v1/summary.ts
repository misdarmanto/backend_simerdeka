/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import express, { type Express, type Request, type Response } from 'express'
import * as summaries from '../../controllers/summary'

export const summaryRoutes = (app: Express) => {
  const route = express.Router()
  app.use('/api/v1/summaries', route)
  route.get('/', async (req: Request, res: Response) => await summaries.findAll(req, res))
}
