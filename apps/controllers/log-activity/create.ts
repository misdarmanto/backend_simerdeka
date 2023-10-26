import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { requestChecker } from '../../utilities/requestCheker'
import { v4 as uuidv4 } from 'uuid'
import { Op } from 'sequelize'
import { getActiveSemester } from '../../utilities/active-semester'
import { LogActivityModel, type LogActivityAttributes } from '../../models/log-activities'
import { UserModel } from '../../models/user'

export const createLogActivity = async (req: any, res: Response): Promise<any> => {
  const requestBody = req.body as LogActivityAttributes
  const emptyField = requestChecker({
    requireList: ['x-user-id', 'logActivityMessage'],
    requestData: { ...req.body, ...req.headers }
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
        userId: { [Op.eq]: req.header('x-user-id') }
      }
    })

    if (user == null) {
      const message = 'access denied!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.UNAUTHORIZED).json(response)
    }

    const activeSemester = await getActiveSemester()

    requestBody.logActivityId = uuidv4()
    requestBody.logActivityCreatedBy = user.userName
    requestBody.logActivitySemesterId = activeSemester
    await LogActivityModel.create(requestBody)

    const response = ResponseData.default
    response.data = { message: 'success' }
    return res.status(StatusCodes.CREATED).json(response)
  } catch (error: any) {
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}
