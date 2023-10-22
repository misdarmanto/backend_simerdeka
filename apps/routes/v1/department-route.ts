/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import express, { type Request, type Response, type Router } from 'express'
import * as department from '../../controllers/department'

export const departmentRoutes = (app: Router): void => {
  const route = express.Router()
  app.use('/api/v1/departments', route)
  route.get(
    '/',
    async (req: Request, res: Response) => await department.findAll(req, res)
  )
  route.get(
    '/detail/:id',
    async (req: Request, res: Response) => await department.findOne(req, res)
  )
  route.post(
    '/',
    async (req: Request, res: Response) => await department.create(req, res)
  )
  // route.post("/register", (req: Request, res: Response) => auth.register(req, res));
  // route.post("/login", (req: Request, res: Response) => auth.login(req, res));
  // route.get("/me/:id", (req: Request, res: Response) => auth.findOne(req, res));
}
