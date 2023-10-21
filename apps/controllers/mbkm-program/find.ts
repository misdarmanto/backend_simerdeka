import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { Op } from 'sequelize'
import { Pagination } from '../../utilities/pagination'
import { requestChecker } from '../../utilities/requestCheker'
import { SemesterModel } from '../../models/semester'
import { type MbkmProgramAttributes, MbkmProgramModel } from '../../models/mbkm-program'
import { getActiveSemester } from '../../utilities/active-semester'

export const findAll = async (req: any, res: Response): Promise<any> => {
  try {
    const activeSemester = await getActiveSemester()

    const page = new Pagination(
      parseInt(req.query.page) ?? 0,
      parseInt(req.query.size) ?? 10
    )
    const result = await MbkmProgramModel.findAndCountAll({
      where: {
        deleted: { [Op.eq]: 0 },
        mbkmProgramSemesterId: { [Op.eq]: activeSemester?.semesterId },
        ...(Boolean(req.query.search) && {
          [Op.or]: [{ programName: { [Op.like]: `%${req.query.search}%` } }]
        }),
        ...(Boolean(req.query.semesterId) && {
          semesterId: { [Op.eq]: req.query.semesterId }
        })
      },
      order: [['id', 'desc']],
      ...(req.query.pagination === 'true' && {
        limit: page.limit,
        offset: page.offset
      }),
      include: [SemesterModel]
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

    const MbkmProgram = await MbkmProgramModel.findOne({
      where: {
        deleted: { [Op.eq]: 0 },
        mbkmProgramSemesterId: { [Op.eq]: activeSemester?.semesterId },
        mbkmProgramId: { [Op.eq]: params.id },
        ...(Boolean(req.query.semesterId) && {
          semesterId: { [Op.eq]: req.query.semesterId }
        })
      },
      include: [SemesterModel]
    })

    if (MbkmProgram == null) {
      const message = 'not found!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.NOT_FOUND).json(response)
    }

    const response = ResponseData.default
    response.data = MbkmProgram
    return res.status(StatusCodes.OK).json(response)
  } catch (error: any) {
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}
