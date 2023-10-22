import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { requestChecker } from '../../utilities/requestCheker'
import { v4 as uuidv4 } from 'uuid'
import { UserModel } from '../../models/user'
import { Op } from 'sequelize'
import {
  type MbkmProgramProdiAttributes,
  MbkmProgramProdiModel
} from '../../models/mbkm-program-prodi'
import { getActiveSemester } from '../../utilities/active-semester'

export const create = async (req: any, res: Response): Promise<any> => {
  const requestBody = req.body as MbkmProgramProdiAttributes
  const emptyField = requestChecker({
    requireList: ['x-user-id'],
    requestData: req.headers
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
        [Op.or]: [{ userRole: 'academic' }, { userRole: 'lp3m' }]
      }
    })

    if (user == null) {
      const message = 'access denied!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.UNAUTHORIZED).json(response)
    }

    const activeSemester = await getActiveSemester()

    let mbkmProgramProdiList: MbkmProgramProdiAttributes[] = []

    if (Array.isArray(requestBody)) {
      const result = requestBody.map((item: MbkmProgramProdiAttributes) => {
        const newData: MbkmProgramProdiAttributes = {
          ...item,
          mbkmProgramProdiId: uuidv4(),
          mbkmProgramProdiSemesterId: activeSemester?.semesterId ?? ''
        }
        return newData
      })
      mbkmProgramProdiList = result
    }

    await MbkmProgramProdiModel.bulkCreate(mbkmProgramProdiList)
    const response = ResponseData.default
    response.data = { message: 'success' }
    return res.status(StatusCodes.CREATED).json(response)
  } catch (error: any) {
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}
