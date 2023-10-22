import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { Op } from 'sequelize'
import { Pagination } from '../../utilities/pagination'
import { requestChecker } from '../../utilities/requestCheker'
import { type MbkmProgramAttributes, MbkmProgramModel } from '../../models/mbkm-program'
import { MbkmProgramProdiModel } from '../../models/mbkm-program-prodi'
import { UserModel } from '../../models/user'
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
      const message = 'access denied!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.UNAUTHORIZED).json(response)
    }

    const activeSemester = await getActiveSemester()

    const page = new Pagination(
      parseInt(req.query.page) ?? 0,
      parseInt(req.query.size) ?? 10
    )
    const result = await MbkmProgramProdiModel.findAndCountAll({
      where: {
        deleted: { [Op.eq]: 0 },
        mbkmProgramProdiSemesterId: { [Op.eq]: activeSemester?.semesterId },
        ...(Boolean(req.query.search) && {
          [Op.or]: [{ programName: { [Op.like]: `%${req.query.search}%` } }]
        }),

        ...(Boolean(req.query.programId) && {
          mbkmProgramProdiProgramId: {
            [Op.eq]: req.query.programId
          }
        }),
        ...(Boolean(req.query.mbkmProgramProdiStudyProgramId) && {
          mbkmProgramProdiStudyProgramId: {
            [Op.eq]: req.query.mbkmProgramProdiStudyProgramId
          }
        }),
        ...(Boolean(req.query.semesterId) && {
          mbkmProgramProdiSemesterId: {
            [Op.eq]: req.query.semesterId
          }
        }),
        ...(user?.userRole === 'studyProgram' && {
          mbkmProgramProdiStudyProgramId: {
            [Op.eq]: user.userId
          }
        }),
        ...(user?.userRole === 'department' && {
          mbkmProgramProdiDepartmentId: {
            [Op.eq]: user.userId
          }
        })
      },

      include: [
        {
          model: MbkmProgramModel,
          as: 'mbkmPrograms'
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
  const params = req.params as MbkmProgramAttributes

  const emptyField = requestChecker({
    requireList: ['id', 'x-user-id'],
    requestData: { ...req.params, ...req.headers }
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

    const result = await MbkmProgramProdiModel.findOne({
      where: {
        deleted: { [Op.eq]: 0 },
        mbkmProgramProdiSemesterId: { [Op.eq]: activeSemester?.semesterId },
        mbkmProgramProdiProgramId: { [Op.eq]: params.id },
        ...(user?.userRole === 'studyProgram' && {
          mbkmProgramProdiStudyProgramId: {
            [Op.eq]: user.userId
          }
        }),
        ...(user?.userRole === 'department' && {
          mbkmProgramProdiDepartmentId: {
            [Op.eq]: user.userId
          }
        })
      },
      include: [
        {
          model: MbkmProgramModel,
          as: 'mbkmPrograms'
        }
      ]
    })

    if (result == null) {
      const message = 'not found!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.NOT_FOUND).json(response)
    }

    const response = ResponseData.default
    response.data = result
    return res.status(StatusCodes.OK).json(response)
  } catch (error: any) {
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}
