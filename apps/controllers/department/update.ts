import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { Op } from 'sequelize'
import { requestChecker } from '../../utilities/requestCheker'
import { type SemesterAttributes, SemesterModel } from '../../models/semester'

export const update = async (req: any, res: Response): Promise<any> => {
  const body = req.body as SemesterAttributes

  const emptyField = requestChecker({
    requireList: ['semesterId'],
    requestData: body
  })

  if (emptyField.length > 0) {
    const message = `invalid request parameter! require (${emptyField})`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.BAD_REQUEST).json(response)
  }

  try {
    const semester = await SemesterModel.findOne({
      where: {
        deleted: { [Op.eq]: 0 },
        semesterId: { [Op.eq]: body.semesterId }
      }
    })

    if (semester == null) {
      const message = 'not found!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.NOT_FOUND).json(response)
    }

    const newData = {
      ...(Boolean(req.body.semesterName) && { semesterName: req.body.semesterName }),
      ...(Boolean(req.body.semesterType) && { semesterType: req.body.semesterType })
    }

    await SemesterModel.update(newData, {
      where: {
        deleted: { [Op.eq]: 0 },
        semesterId: { [Op.eq]: body.semesterId }
      }
    })

    const response = ResponseData.default
    response.data = { message: 'success' }
    return res.status(StatusCodes.OK).json(response)
  } catch (error: any) {
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}
