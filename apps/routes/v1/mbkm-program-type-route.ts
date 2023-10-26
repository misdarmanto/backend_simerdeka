/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import express, { type Express, type Request, type Response } from 'express'
import { MbkmProgramTypeController } from '../../controllers/mbkm-program-type'

export const mbkmProgramTypeRoutes = (app: Express): void => {
  const route = express.Router()
  app.use('/api/v1/mbkm-program-types', route)
  route.get(
    '/',
    async (req: Request, res: Response) =>
      await MbkmProgramTypeController.findAll(req, res)
  )
}
