import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { Op } from 'sequelize'
import { requestChecker } from '../../utilities/requestCheker'
import {
  type RecomendationLetterAttributes,
  RecomendationLetterModel
} from '../../models/recomendation-letter'

export const update = async (req: any, res: Response): Promise<any> => {
  const body = req.body as RecomendationLetterAttributes

  const emptyField = requestChecker({
    requireList: ['recomendationLetterId'],
    requestData: body
  })

  if (emptyField.length > 0) {
    const message = `invalid request parameter! require (${emptyField})`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.BAD_REQUEST).json(response)
  }

  try {
    const recomendationLetter = await RecomendationLetterModel.findOne({
      where: {
        deleted: { [Op.eq]: 0 },
        recomendationLetterId: { [Op.eq]: body.recomendationLetterId }
      }
    })

    if (recomendationLetter == null) {
      const message = 'not found!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.NOT_FOUND).json(response)
    }

    await recomendationLetter.save()

    const response = ResponseData.default
    response.data = { message: 'success' }
    return res.status(StatusCodes.OK).json(response)
  } catch (error: any) {
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}
