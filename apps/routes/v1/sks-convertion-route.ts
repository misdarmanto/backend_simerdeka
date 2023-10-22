/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import express, { type Express, type Request, type Response } from 'express'
import { middleware } from '../../middlewares'
import * as sksConvertion from '../../controllers/sks-convertion'

export const sksConvertionRoutes = (app: Express) => {
  const router = express.Router()
  app.use('/api/v1/sks-convertions', middleware.useAuthorization, router)
  router.get(
    '/',
    async (req: Request, res: Response) => await sksConvertion.findAll(req, res)
  )
  router.get(
    '/detail/:id',
    async (req: Request, res: Response) => await sksConvertion.findOne(req, res)
  )
  router.get(
    '/students/detail/:id',
    async (req: Request, res: Response) => await sksConvertion.findStudent(req, res)
  )
  router.post(
    '/',
    async (req: Request, res: Response) => await sksConvertion.create(req, res)
  )
  router.patch(
    '/',
    async (req: Request, res: Response) => await sksConvertion.update(req, res)
  )
  router.delete(
    '/',
    async (req: Request, res: Response) => await sksConvertion.remove(req, res)
  )
}
