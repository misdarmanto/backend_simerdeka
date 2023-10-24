/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import express, { type Express, type Request, type Response } from 'express'
import { middleware } from '../../middlewares'
import { LogActivityController } from '../../controllers/log-activity'

export const logActivityRoute = (app: Express) => {
  const router = express.Router()
  app.use('/api/v1/log-activities', middleware.useAuthorization, router)
  router.get(
    '/',
    async (req: Request, res: Response) => await LogActivityController.findAll(req, res)
  )
  router.get(
    '/detail/:id',
    async (req: Request, res: Response) =>
      await LogActivityController.findDetail(req, res)
  )
  router.post(
    '/',
    async (req: Request, res: Response) => await LogActivityController.create(req, res)
  )
}
