/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import express, { type Express, type Request, type Response } from 'express'
import * as student from '../../controllers/student'

export const studentRoutes = (app: Express) => {
  const route = express.Router()
  app.use('/api/v1/students', route)
  route.get('/', async (req: Request, res: Response) => await student.findAll(req, res))
  route.get(
    '/detail/:id',
    async (req: Request, res: Response) => await student.findOne(req, res)
  )
  route.post('/', async (req: Request, res: Response) => await student.create(req, res))
  route.patch('/', async (req: Request, res: Response) => await student.update(req, res))
  route.delete('/', async (req: Request, res: Response) => await student.remove(req, res))
}
