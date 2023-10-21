/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import express, { type Express, type Request, type Response } from 'express'
import { middleware } from '../../middlewares'
import * as reportParticipation from '../../controllers/report-participation'

export const reportParticipationRoutes = (app: Express) => {
  const route = express.Router()
  app.use('/api/v1/report-participations', middleware.useAuthorization, route)
  route.get(
    '/',
    async (req: Request, res: Response) => await reportParticipation.findAll(req, res)
  )
  route.get(
    '/detail/:id',
    async (req: Request, res: Response) => await reportParticipation.findOne(req, res)
  )
  route.post(
    '/',
    async (req: Request, res: Response) => await reportParticipation.create(req, res)
  )
  route.patch(
    '/',
    async (req: Request, res: Response) => await reportParticipation.update(req, res)
  )
  route.delete(
    '/',
    async (req: Request, res: Response) => await reportParticipation.remove(req, res)
  )
}
