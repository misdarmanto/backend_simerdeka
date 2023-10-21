import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { Op } from 'sequelize'
import { Pagination } from '../../utilities/pagination'
import { requestChecker } from '../../utilities/requestCheker'
import { StudyProgramModel } from '../../models/study-program'
import { getActiveSemester } from '../../utilities/active-semester'

export const findAll = async (req: any, res: Response): Promise<any> => {
  try {
    const page = new Pagination(
      parseInt(req.query.page) ?? 0,
      parseInt(req.query.size) ?? 10
    )
    const result = await StudyProgramModel.findAndCountAll({
      where: {
        deleted: { [Op.eq]: 0 },
        // studyProgramSemesterId: { [Op.eq]: activeSemester?.semesterId },
        ...(Boolean(req.query.search) && {
          [Op.or]: [{ studyProgramName: { [Op.like]: `%${req.query.search}%` } }]
        }),
        ...(Boolean(req.query.registered) && {
          studyProgramIsRegistered: {
            [Op.eq]: true
          }
        })
      },
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
    const activeSemester = await getActiveSemester()

    const studyProgram = await StudyProgramModel.findOne({
      where: {
        deleted: { [Op.eq]: 0 },
        studyProgramSemesterId: { [Op.eq]: activeSemester?.semesterId },
        studyProgramId: { [Op.eq]: req.params.id },
        ...(Boolean(req.query.registered) && {
          studyProgramIsRegistered: {
            [Op.eq]: true
          }
        })
      }
    })

    if (studyProgram == null) {
      const message = 'study program not found!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.NOT_FOUND).json(response)
    }

    const response = ResponseData.default
    response.data = studyProgram
    return res.status(StatusCodes.OK).json(response)
  } catch (error: any) {
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}
