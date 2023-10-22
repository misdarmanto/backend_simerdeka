import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { Op } from 'sequelize'
import { Pagination } from '../../utilities/pagination'
import { requestChecker } from '../../utilities/requestCheker'
import {
  type SksConvertionAttributes,
  SksConvertionModel
} from '../../models/sks-convertion'
import { StudentModel } from '../../models/student'
import { MbkmProgramModel } from '../../models/mbkm-program'
import { SksConvertionSchemaModel } from '../../models/sks-convertion-schema'
import { MataKuliahModel } from '../../models/matkul'

export const findAll = async (req: any, res: Response): Promise<any> => {
  try {
    const page = new Pagination(
      parseInt(req.query.page) ?? 0,
      parseInt(req.query.size) ?? 10
    )
    const result = await SksConvertionModel.findAndCountAll({
      where: {
        deleted: { [Op.eq]: 0 }
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
  const params = req.params as SksConvertionAttributes

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
    const page = new Pagination(
      parseInt(req.query.page) ?? 0,
      parseInt(req.query.size) ?? 10
    )
    const result = await SksConvertionModel.findAndCountAll({
      where: {
        deleted: { [Op.eq]: 0 },
        sksConvertionId: { [Op.eq]: params.id }
      },
      order: [['id', 'desc']],
      ...(req.query.pagination === 'true' && {
        limit: page.limit,
        offset: page.offset
      }),
      include: [
        {
          model: SksConvertionSchemaModel,
          as: 'sksConvertionSchema',
          include: [
            {
              model: MataKuliahModel,
              as: 'mataKuliah'
            }
          ]
        }
      ]
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

export const findStudent = async (req: any, res: Response): Promise<any> => {
  //   const params = req.params as SksConvertionAttributes

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
    const result = await SksConvertionModel.findOne({
      where: {
        deleted: { [Op.eq]: 0 }
      },
      attributes: [
        'sksConvertion_id',
        'sksConvertion_total',
        'sksConvertion_student_id',
        'sksConvertionMbkmProgramId'
      ],

      include: [StudentModel, MbkmProgramModel]
    })

    const response = ResponseData.default
    response.data = result
    return res.status(StatusCodes.OK).json(response)
  } catch (error: any) {
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}
