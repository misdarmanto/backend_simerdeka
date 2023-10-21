import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { Op } from 'sequelize'
import { Pagination } from '../../utilities/pagination'
import { requestChecker } from '../../utilities/requestCheker'
import { UserModel } from '../../models/user'
import { type TranskripAttributes, TranskripModel } from '../../models/transkrip'
import { MataKuliahModel } from '../../models/matkul'
import { getActiveSemester } from '../../utilities/active-semester'

export const findAll = async (req: any, res: Response): Promise<any> => {
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
        userId: { [Op.eq]: req.header('x-user-id') }
      }
    })

    if (user == null) {
      const message = 'user not registered!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.UNAUTHORIZED).json(response)
    }

    const activeSemester = await getActiveSemester()

    const page = new Pagination(
      parseInt(req.query.page) ?? 0,
      parseInt(req.query.size) ?? 10
    )
    const result = await TranskripModel.findAndCountAll({
      where: {
        deleted: { [Op.eq]: 0 },
        transkripSemesterId: { [Op.eq]: activeSemester?.semesterId },
        ...(user.userRole === 'student' && {
          transkripStudentId: { [Op.eq]: user.userId }
        }),
        ...(user.userRole === 'studyProgram' && {
          transkripStudyProgramId: {
            [Op.eq]: user.userId
          }
        }),
        ...(user.userRole === 'department' && {
          transkripDepartmentId: {
            [Op.eq]: user.userId
          }
        })
      },
      order: [['id', 'desc']],
      ...(req.query.pagination === 'true' && {
        limit: page.limit,
        offset: page.offset
      }),

      include: [
        {
          model: MataKuliahModel,
          as: 'mataKuliah',
          attributes: ['mataKuliahName', 'mataKuliahSksTotal'],
          where: {
            deleted: { [Op.eq]: 0 }
          }
        }
      ],

      attributes: ['transkripMataKuliahGrade', 'transkripId']
    })

    const response = ResponseData.default
    response.data = page.data(result)
    return res.status(StatusCodes.OK).json(response)
  } catch (error: any) {
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}

export const findOne = async (req: any, res: Response): Promise<any> => {
  const params = req.params as TranskripAttributes

  const emptyField = requestChecker({
    requireList: ['id'],
    requestData: req.params
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
      const message = 'user not found!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.NOT_FOUND).json(response)
    }

    const activeSemester = await getActiveSemester()

    const transkrip = await TranskripModel.findOne({
      where: {
        deleted: { [Op.eq]: 0 },
        transkripSemesterId: { [Op.eq]: activeSemester?.semesterId },
        transkripId: { [Op.eq]: params.id },
        ...(user.userRole === 'student' && {
          transkripStudentId: { [Op.eq]: user.userId }
        }),
        ...(user.userRole === 'studyProgram' && {
          transkripStudyProgramId: {
            [Op.eq]: user.userId
          }
        }),
        ...(user.userRole === 'department' && {
          transkripDepartmentId: {
            [Op.eq]: user.userId
          }
        })
      }
    })

    if (transkrip == null) {
      const message = 'not found!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.NOT_FOUND).json(response)
    }

    const response = ResponseData.default
    response.data = transkrip
    return res.status(StatusCodes.OK).json(response)
  } catch (error: any) {
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}
