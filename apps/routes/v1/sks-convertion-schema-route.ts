/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import express, { type Express, type Request, type Response } from 'express'
import { middleware } from '../../middlewares'
import * as sksConvertionSchema from '../../controllers/sks-convertion-schema'

export const sksConvertionSchemaRoutes = (app: Express) => {
  const router = express.Router()
  app.use('/api/v1/sks-convertions-schema', middleware.useAuthorization, router)
  router.get(
    '/',
    async (req: Request, res: Response) => await sksConvertionSchema.findAll(req, res)
  )
  router.post(
    '/',
    async (req: Request, res: Response) => await sksConvertionSchema.create(req, res)
  )
  router.patch(
    '/',
    async (req: Request, res: Response) => await sksConvertionSchema.update(req, res)
  )
  router.delete(
    '/',
    async (req: Request, res: Response) => await sksConvertionSchema.remove(req, res)
  )
}
