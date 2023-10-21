import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { Op } from 'sequelize'
import { requestChecker } from '../../utilities/requestCheker'
import {
  type RecomendationLetterAttributes,
  RecomendationLetterModel
} from '../../models/recomendation-letter'
import { UserModel } from '../../models/user'

export const changeAssignMentStatus = async (req: any, res: Response): Promise<any> => {
  const body = req.body as RecomendationLetterAttributes

  const emptyField = requestChecker({
    requireList: ['recomendationLetterId', 'x-user-id'],
    requestData: { ...req.body, ...req.headers }
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

    if (user === null || user.userRole === 'student') {
      const message = 'access denied!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.UNAUTHORIZED).json(response)
    }

    const recomendationLetter = await RecomendationLetterModel.findOne({
      where: {
        deleted: { [Op.eq]: 0 },
        recomendationLetterId: { [Op.eq]: body.recomendationLetterId }
      }
    })

    if (recomendationLetter == null) {
      const message = 'recomentdation letter not found!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.NOT_FOUND).json(response)
    }

    const approvalLetter = body.recomendationLetterApprovalLetter
    const sptjmLetter = body.recomendationLetterSptjmLetter

    switch (user.userRole) {
      case 'studyProgram':
        recomendationLetter.recomendationLetterAssignToDepartment = true
        recomendationLetter.recomendationLetterFromStudyProgram = approvalLetter
        break
      case 'department':
        recomendationLetter.recomendationLetterAssignToLp3m = true
        recomendationLetter.recomendationLetterFromDepartment = approvalLetter
        break
      case 'lp3m':
        recomendationLetter.recomendationLetterAssignToAcademic = true
        recomendationLetter.recomendationLetterFromLp3m = approvalLetter
        break
      case 'academic':
        recomendationLetter.recomendationLetterStatus = 'accepted'
        recomendationLetter.recomendationLetterFromAcademic = approvalLetter
        recomendationLetter.recomendationLetterSptjmLetter = sptjmLetter
        break
      default:
        break
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
