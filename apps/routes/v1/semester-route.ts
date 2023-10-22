/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import express, { type Express, type Request, type Response } from 'express'
import { middleware } from '../../middlewares'
import * as semester from '../../controllers/semester'

export const semesterRoutes = (app: Express) => {
  const router = express.Router()
  app.use('/api/v1/semesters', middleware.useAuthorization, router)
  router.get('/', async (req: Request, res: Response) => await semester.findAll(req, res))
  router.get(
    '/detail/:id',
    async (req: Request, res: Response) => await semester.findOne(req, res)
  )
  router.get(
    '/active',
    async (req: Request, res: Response) => await semester.findActiveSemester(req, res)
  )
  router.post('/', async (req: Request, res: Response) => await semester.create(req, res))
  router.patch(
    '/',
    async (req: Request, res: Response) => await semester.update(req, res)
  )
  router.delete(
    '/',
    async (req: Request, res: Response) => await semester.remove(req, res)
  )
}
