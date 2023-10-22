/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import express, { type Express, type Request, type Response } from 'express'
import { LectureController } from '../../controllers/lecture'

export const lectureRoutes = (app: Express) => {
  const route = express.Router()
  app.use('/api/v1/lectures', route)
  route.get(
    '/',
    async (req: Request, res: Response) => await LectureController.findAll(req, res)
  )
  route.get(
    '/:lectureCode',
    async (req: Request, res: Response) => await LectureController.findOne(req, res)
  )
}
