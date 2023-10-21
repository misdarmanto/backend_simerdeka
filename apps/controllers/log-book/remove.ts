import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { Op } from 'sequelize'
import { requestChecker } from '../../utilities/requestCheker'
import { LogBookModel } from '../../models/log-book'
import { StudentModel } from '../../models/student'

export const remove = async (req: any, res: Response): Promise<any> => {
  const emptyField = requestChecker({
    requireList: ['logBookId'],
    requestData: req.query
  })

  if (emptyField.length > 0) {
    const message = `invalid request parameter! require (${emptyField})`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.BAD_REQUEST).json(response)
  }

  try {
    const student = await StudentModel.findOne({
      where: {
        deleted: { [Op.eq]: 0 },
        studentId: { [Op.eq]: req.header('x-user-id') }
      }
    })

    if (student == null) {
      const message = 'access denied!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.UNAUTHORIZED).json(response)
    }

    const logBook = await LogBookModel.findOne({
      where: {
        deleted: { [Op.eq]: 0 },
        logBookId: { [Op.eq]: req.query.logBookId }
      }
    })

    if (logBook == null) {
      const message = 'not found!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.NOT_FOUND).json(response)
    }

    await LogBookModel.update(
      { deleted: 1 },
      {
        where: {
          logBookId: { [Op.eq]: req.query.logBookId }
        }
      }
    )

    const response = ResponseData.default
    response.data = { message: 'success' }
    return res.status(StatusCodes.OK).json(response)
  } catch (error: any) {
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}
