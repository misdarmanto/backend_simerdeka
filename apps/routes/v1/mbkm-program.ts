/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import express, { type Express, type Request, type Response } from 'express'
import { middleware } from '../../middlewares'
import * as mbkmProgram from '../../controllers/mbkm-program'
import * as mbkmProgramProdi from '../../controllers/mbkm-program-prodi'

export const mbkmProgramRoutes = (app: Express) => {
  const route = express.Router()
  app.use('/api/v1/mbkm-programs', middleware.useAuthorization, route)
  route.get(
    '/',
    async (req: Request, res: Response) => await mbkmProgram.findAll(req, res)
  )
  route.get(
    '/detail/:id',
    async (req: Request, res: Response) => await mbkmProgram.findOne(req, res)
  )
  route.post(
    '/',
    async (req: Request, res: Response) => await mbkmProgram.create(req, res)
  )
  route.patch(
    '/',
    async (req: Request, res: Response) => await mbkmProgram.update(req, res)
  )
  route.delete(
    '/',
    async (req: Request, res: Response) => await mbkmProgram.remove(req, res)
  )

  route.get(
    '/prodi',
    async (req: Request, res: Response) => await mbkmProgramProdi.findAll(req, res)
  )
  route.get(
    '/prodi/detail/:id',
    async (req: Request, res: Response) => await mbkmProgramProdi.findOne(req, res)
  )
  route.post(
    '/prodi',
    async (req: Request, res: Response) => await mbkmProgramProdi.create(req, res)
  )
  route.delete(
    '/prodi',
    async (req: Request, res: Response) => await mbkmProgramProdi.remove(req, res)
  )
}
