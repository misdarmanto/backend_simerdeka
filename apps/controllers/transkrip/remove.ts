import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { Op } from 'sequelize'
import { requestChecker } from '../../utilities/requestCheker'
import { UserModel } from '../../models/user'
import { TranskripModel } from '../../models/transkrip'

export const remove = async (req: any, res: Response): Promise<any> => {
  const emptyField = requestChecker({
    requireList: ['id'],
    requestData: req.query
  })

  if (emptyField.length > 0) {
    const message = `invalid request parameter! require (${emptyField})`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.BAD_REQUEST).json(response)
  }

  try {
    const user = await UserModel.findOne({
      where: {
        deleted: { [Op.eq]: 0 },
        userId: { [Op.eq]: req.header('x-user-id') },
        userRole: { [Op.eq]: 'studyProgram' }
      }
    })

    if (user == null) {
      const message = 'access denied!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.UNAUTHORIZED).json(response)
    }

    const transkrip = await TranskripModel.findOne({
      where: {
        deleted: { [Op.eq]: 0 },
        transkripId: { [Op.eq]: req.query.id }
      }
    })

    if (transkrip == null) {
      const message = 'not found!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.NOT_FOUND).json(response)
    }

    await TranskripModel.update(
      { deleted: 1 },
      {
        where: {
          transkripId: { [Op.eq]: req.query.id }
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
