import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { Op } from 'sequelize'
import { requestChecker } from '../../utilities/requestCheker'
import { MataKuliahModel, type MataKuliahAttributes } from '../../models/matkul'

export const update = async (req: any, res: Response): Promise<any> => {
  const requestBody = req.body as MataKuliahAttributes

  const emptyField = requestChecker({
    requireList: ['mataKuliahId', 'x-user-id'],
    requestData: { ...requestBody, ...req.headers }
  })

  if (emptyField.length > 0) {
    const message = `invalid request parameter! require (${emptyField})`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.BAD_REQUEST).json(response)
  }

  try {
    const mataKuliah = await MataKuliahModel.findOne({
      where: {
        deleted: { [Op.eq]: 0 },
        mataKuliahId: { [Op.eq]: requestBody.mataKuliahId }
      }
    })

    if (mataKuliah == null) {
      const message = 'not found!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.NOT_FOUND).json(response)
    }

    const newData: MataKuliahAttributes | any = {
      ...(requestBody.mataKuliahVerificationStatus.length > 0 && {
        mataKuliahVerificationStatus: requestBody.mataKuliahVerificationStatus
      })
    }

    await MataKuliahModel.update(newData, {
      where: {
        deleted: { [Op.eq]: 0 },
        mataKuliahId: { [Op.eq]: requestBody.mataKuliahId }
      }
    })

    const response = ResponseData.default
    response.data = { message: 'success' }
    return res.status(StatusCodes.OK).json(response)
  } catch (error: any) {
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}
