import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { Op } from 'sequelize'
import { Pagination } from '../../utilities/pagination'
import { requestChecker } from '../../utilities/requestCheker'
import { StudentModel } from '../../models/student'
import { UserModel } from '../../models/user'
import { MbkmProgramModel } from '../../models/mbkm-program'
import { TranskripModel } from '../../models/transkrip'
import { getActiveSemester } from '../../utilities/active-semester'

export const findAll = async (req: any, res: Response): Promise<any> => {
  try {
    const user = await UserModel.findOne({
      where: {
        deleted: { [Op.eq]: 0 },
        userId: { [Op.eq]: req.header('x-user-id') }
      }
    })

    if (user == null) {
      const message = 'student not registered'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.NOT_FOUND).json(response)
    }

    const activeSemester = await getActiveSemester()

    const page = new Pagination(
      parseInt(req.query.page) ?? 0,
      parseInt(req.query.size) ?? 10
    )
    const result = await StudentModel.findAndCountAll({
      where: {
        deleted: { [Op.eq]: 0 },
        studentSemesterId: { [Op.eq]: activeSemester?.semesterId },
        ...(Boolean(req.query.search) && {
          [Op.or]: [{ studentName: { [Op.like]: `%${req.query.search}%` } }]
        }),

        studentIsRegistered: {
          [Op.eq]: true
        },
        ...(Boolean(req.query.mbkmProgramId) && {
          studentMbkmProgramId: {
            [Op.eq]: req.query.mbkmProgramId === 'null' ? null : req.query.mbkmProgramId
          }
        }),
        ...(Boolean(req.query.transkripId) && {
          studentTranskripId: {
            [Op.eq]: req.query.transkripId ?? null
          }
        }),
        ...(user.userRole === 'studyProgram' && {
          studentStudyProgramId: {
            [Op.eq]: user.userId
          }
        }),
        ...(user.userRole === 'department' && {
          studentDepartmentId: {
            [Op.eq]: user.userId
          }
        })
      },
      include: [
        {
          model: MbkmProgramModel,
          as: 'mbkmProgram'
        },
        {
          model: TranskripModel
        }
      ],
      order: [['id', 'desc']],
      ...(req.query.pagination === 'true' && {
        limit: page.limit,
        offset: page.offset
      })
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

    const student = await StudentModel.findOne({
      where: {
        deleted: { [Op.eq]: 0 },
        studentId: { [Op.eq]: req.params.id },
        studentSemesterId: { [Op.eq]: activeSemester?.semesterId },
        studentIsRegistered: {
          [Op.eq]: true
        },
        ...(Boolean(req.query.mbkmProgramId) && {
          studentMbkmProgramId: {
            [Op.eq]: req.query.mbkmProgramId
          }
        }),
        ...(Boolean(req.query.transkripId) && {
          studentTranskripId: {
            [Op.eq]: req.query.transkripId
          }
        }),
        ...(user.userRole === 'studyProgram' && {
          studentStudyProgramId: {
            [Op.eq]: user.userId
          }
        }),
        ...(user.userRole === 'department' && {
          studentDepartmentId: {
            [Op.eq]: user.userId
          }
        })
      },
      include: [
        {
          model: MbkmProgramModel,
          as: 'mbkmProgram'
        },
        {
          model: TranskripModel
        }
      ]
    })

    if (student == null) {
      const message = 'anda belum terdaftar sebagai peserta MBKM'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.NOT_FOUND).json(response)
    }

    const response = ResponseData.default
    response.data = student
    return res.status(StatusCodes.OK).json(response)
  } catch (error: any) {
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}
