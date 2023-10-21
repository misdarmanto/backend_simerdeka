import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { requestChecker } from '../../utilities/requestCheker'
import { v4 as uuidv4 } from 'uuid'
import { UserModel } from '../../models/user'
import { Op } from 'sequelize'
import {
  type SksConvertionSchemaAttributes,
  SksConvertionSchemaModel
} from '../../models/sks-convertion-schema'

export const create = async (req: any, res: Response): Promise<any> => {
  const body = req.body as SksConvertionSchemaAttributes
  const emptyField = requestChecker({
    requireList: [
      'sksConvertionSchemaSksConvertionId',
      'sksConvertionSchemaMatkulId',
      'sksConvertionSchemaMbkmProgramId'
    ],
    requestData: body
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

    body.sksConvertionSchemaStudyProgramId = user.userId
    body.sksConvertionSchemaId = uuidv4()
    await SksConvertionSchemaModel.create(body)

    const response = ResponseData.default
    response.data = { message: 'success' }
    return res.status(StatusCodes.CREATED).json(response)
  } catch (error: any) {
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}
