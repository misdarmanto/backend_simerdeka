/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import express, { type Express, type Request, type Response } from 'express'
import { middleware } from '../../middlewares'
import * as mataKuliah from '../../controllers/mata-kuliah'

export const mataKuliahRoute = (app: Express) => {
  const router = express.Router()
  app.use('/api/v1/mata-kuliah', middleware.useAuthorization, router)
  router.get(
    '/',
    async (req: Request, res: Response) => await mataKuliah.findAll(req, res)
  )
  router.get(
    '/detail/:id',
    async (req: Request, res: Response) => await mataKuliah.findOne(req, res)
  )
  router.post(
    '/',
    async (req: Request, res: Response) => await mataKuliah.create(req, res)
  )
  router.patch(
    '/',
    async (req: Request, res: Response) => await mataKuliah.update(req, res)
  )
  router.delete(
    '/',
    async (req: Request, res: Response) => await mataKuliah.remove(req, res)
  )
}
