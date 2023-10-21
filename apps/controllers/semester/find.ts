import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { Op } from 'sequelize'
import { Pagination } from '../../utilities/pagination'
import { SemesterModel } from '../../models/semester'

export const findAll = async (req: any, res: Response): Promise<any> => {
  try {
    const page = new Pagination(
      parseInt(req.query.page) ?? 0,
      parseInt(req.query.size) ?? 10
    )
    const result = await SemesterModel.findAndCountAll({
      where: {
        deleted: { [Op.eq]: 0 },
        ...(Boolean(req.query.search) && {
          [Op.or]: [{ semesterName: { [Op.like]: `%${req.query.search}%` } }]
        }),
        ...(Boolean(req.query.semesterStatus) && {
          semesterStatus: { [Op.eq]: 'active' }
        })
      },
      order: [['semesterStatus', 'asc']],
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
  try {
    const semester = await SemesterModel.findOne({
      where: {
        deleted: { [Op.eq]: 0 },
        semesterId: { [Op.eq]: req.params.id }
      }
    })

    if (semester == null) {
      const message = 'semester not found!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.NOT_FOUND).json(response)
    }

    const response = ResponseData.default
    response.data = semester
    return res.status(StatusCodes.OK).json(response)
  } catch (error: any) {
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}

export const findActiveSemester = async (req: any, res: Response): Promise<any> => {
  try {
    const semester = await SemesterModel.findOne({
      where: {
        deleted: { [Op.eq]: 0 },
        semesterStatus: { [Op.eq]: 'active' }
      }
    })

    if (semester == null) {
      const message = 'semester not found!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.NOT_FOUND).json(response)
    }

    const response = ResponseData.default
    response.data = semester
    return res.status(StatusCodes.OK).json(response)
  } catch (error: any) {
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}
