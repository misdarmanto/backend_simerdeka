import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { Op } from 'sequelize'
import { requestChecker } from '../../utilities/requestCheker'
import {
  type ReportParticipationAttributes,
  ReportParticipationModel
} from '../../models/report-participation'

export const remove = async (req: any, res: Response): Promise<any> => {
  const body = req.body as ReportParticipationAttributes

  const emptyField = requestChecker({
    requireList: ['reportParticipationId'],
    requestData: body
  })

  if (emptyField.length > 0) {
    const message = `invalid request parameter! require (${emptyField})`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.BAD_REQUEST).json(response)
  }

  try {
    const academicProgramCheck = await ReportParticipationModel.findOne({
      where: {
        deleted: { [Op.eq]: 0 },
        reportParticipationId: { [Op.eq]: req.query.reportParticipationId }
      }
    })

    if (academicProgramCheck == null) {
      const message = 'not found!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.NOT_FOUND).json(response)
    }

    await ReportParticipationModel.update(
      { deleted: 1 },
      {
        where: {
          reportParticipationId: { [Op.eq]: body.reportParticipationId }
        }
      }
    )

    const response = ResponseData.default
    response.data = { message: 'success' }
    return res.status(StatusCodes.OK).json(response)
  } catch (error: any) {
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}
