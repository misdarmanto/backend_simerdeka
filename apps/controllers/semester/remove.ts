import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { Op } from 'sequelize'
import { requestChecker } from '../../utilities/requestCheker'
import { SemesterModel } from '../../models/semester'
import { UserModel } from '../../models/user'

export const remove = async (req: any, res: Response): Promise<any> => {
  const emptyField = requestChecker({
    requireList: ['semesterId'],
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
        [Op.or]: [{ userRole: 'academic' }, { userRole: 'lp3m' }]
      }
    })

    if (user == null) {
      const message = 'access denied!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.UNAUTHORIZED).json(response)
    }

    const semesterCheck = await SemesterModel.findOne({
      where: {
        deleted: { [Op.eq]: 0 },
        semesterId: { [Op.eq]: req.query.semesterId }
      }
    })

    if (semesterCheck == null) {
      const message = 'semester not found!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.NOT_FOUND).json(response)
    }

    await SemesterModel.update(
      { deleted: 1 },
      {
        where: {
          semesterId: { [Op.eq]: req.query.semesterId }
        }
      }
    )

    const newSemester = await SemesterModel.findOne({
      where: {
        deleted: { [Op.eq]: 0 }
      },
      order: [['semesterStatus', 'asc']]
    })

    if (newSemester != null) {
      newSemester.semesterStatus = 'active'
      void newSemester.save()
    }

    const response = ResponseData.default
    response.data = { message: 'success' }
    return res.status(StatusCodes.OK).json(response)
  } catch (error: any) {
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}
