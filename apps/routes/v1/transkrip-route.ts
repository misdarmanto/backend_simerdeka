/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import express, { type Express, type Request, type Response } from 'express'
import { middleware } from '../../middlewares'
import * as transkrip from '../../controllers/transkrip'

export const transkripRoute = (app: Express) => {
  const router = express.Router()
  app.use('/api/v1/transkrip', middleware.useAuthorization, router)
  router.get(
    '/',
    async (req: Request, res: Response) => await transkrip.findAll(req, res)
  )
  router.get(
    '/detail/:id',
    async (req: Request, res: Response) => await transkrip.findOne(req, res)
  )
  router.post(
    '/',
    async (req: Request, res: Response) => await transkrip.create(req, res)
  )
  router.patch(
    '/',
    async (req: Request, res: Response) => await transkrip.update(req, res)
  )
  router.delete(
    '/',
    async (req: Request, res: Response) => await transkrip.remove(req, res)
  )
}
