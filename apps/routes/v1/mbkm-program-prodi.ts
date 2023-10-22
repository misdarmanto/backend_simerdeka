/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import express, { type Express, type Request, type Response } from 'express'
import { middleware } from '../../middlewares'
import * as mbkmProgramProdi from '../../controllers/mbkm-program-prodi/'

export const mbkmProgramProdiRoutes = (app: Express) => {
  const route = express.Router()
  app.use('/api/v1/mbkm-programs/prodi', middleware.useAuthorization, route)
  route.get(
    '/',
    async (req: Request, res: Response) => await mbkmProgramProdi.findAll(req, res)
  )
  route.get(
    '/detail/:id',
    async (req: Request, res: Response) => await mbkmProgramProdi.findOne(req, res)
  )
  route.post(
    '/',
    async (req: Request, res: Response) => await mbkmProgramProdi.create(req, res)
  )
  route.patch(
    '/',
    async (req: Request, res: Response) => await mbkmProgramProdi.update(req, res)
  )
  route.delete(
    '/',
    async (req: Request, res: Response) => await mbkmProgramProdi.remove(req, res)
  )
}
