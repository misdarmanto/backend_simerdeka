/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import express, { type Express, type Request, type Response } from 'express'
import { middleware } from '../../middlewares'
import * as logBook from '../../controllers/log-book'

export const logBookRoute = (app: Express) => {
  const router = express.Router()
  app.use('/api/v1/log-books', middleware.useAuthorization, router)
  router.get('/', async (req: Request, res: Response) => await logBook.findAll(req, res))
  router.get(
    '/detail/:id',
    async (req: Request, res: Response) => await logBook.findOne(req, res)
  )
  router.post('/', async (req: Request, res: Response) => await logBook.create(req, res))
  router.patch('/', async (req: Request, res: Response) => await logBook.update(req, res))
  router.delete(
    '/',
    async (req: Request, res: Response) => await logBook.remove(req, res)
  )
}
