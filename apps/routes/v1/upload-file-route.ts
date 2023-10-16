import express, { Express, NextFunction, Request, Response } from 'express'
import { uploadFile } from '../../controllers/upload-file'
import { uploadMidleWare } from '../../middlewares/upload-file'
import { StatusCodes } from 'http-status-codes'
import { CONFIG } from '../../configs'
import { ResponseData, ResponseDataAttributes } from '../../utilities/response'

const checkFileSizeMidleWare = (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('check size')
    // console.log(req)
    // if (req.file) {
    //   const fileSizeKiloBytes = req.file.size / 1024
    //   if (fileSizeKiloBytes > +CONFIG.maximumUploadFile) {
    //     throw Error('maksimum file 2mb')
    //   }
    //   next()
    // }

    next()
  } catch (error: any) {
    const message = `maksimum file 2mbw`
    const response = <ResponseDataAttributes>ResponseData.error(message)
    return res.status(StatusCodes.UNAUTHORIZED).json(response)
  }
}

export const uploadFileRoutes = (app: Express) => {
  const route = express.Router()
  app.use('/api/v1/upload-file', route)
  route.post(
    '/',
    checkFileSizeMidleWare,
    uploadMidleWare.single('file'),
    (req: Request, res: Response) => uploadFile(req, res)
  )
}
