/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import express, { type Express, type Request, type Response } from 'express'
import { middleware } from '../../middlewares'
import * as letterOfRecomendation from '../../controllers/recomendation-letter'

export const RecomendationLetterRoutes = (app: Express) => {
  const route = express.Router()
  app.use('/api/v1/recomendation-letters', middleware.useAuthorization, route)

  route.get(
    '/',
    async (req: Request, res: Response) => await letterOfRecomendation.findAll(req, res)
  )
  route.get(
    '/detail/:id',
    async (req: Request, res: Response) => await letterOfRecomendation.findOne(req, res)
  )
  route.post(
    '/',
    async (req: Request, res: Response) => await letterOfRecomendation.create(req, res)
  )
  route.patch(
    '/',
    async (req: Request, res: Response) => await letterOfRecomendation.update(req, res)
  )
  route.delete(
    '/',
    async (req: Request, res: Response) => await letterOfRecomendation.remove(req, res)
  )
  route.patch(
    '/change-status-assignment',
    async (req: Request, res: Response) =>
      await letterOfRecomendation.changeAssignMentStatus(req, res)
  )
  route.patch(
    '/change-status-approval',
    async (req: Request, res: Response) =>
      await letterOfRecomendation.changeStatusApproval(req, res)
  )
}
