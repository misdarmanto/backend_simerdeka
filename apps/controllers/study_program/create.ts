import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { requestChecker } from '../../utilities/requestCheker'
import { v4 as uuidv4 } from 'uuid'
import {
  type StudyProgramAttributes,
  StudyProgramModel
} from '../../models/study-program'
import { getActiveSemester } from '../../utilities/active-semester'

export const create = async (req: any, res: Response): Promise<any> => {
  const body = req.body as StudyProgramAttributes

  const emptyField = requestChecker({
    requireList: [
      'studyProgramName',
      'studyProgramEmail',
      'studyProgramDepartmentId',
      'studyProgramDepartmentName'
    ],
    requestData: body
  })

  if (emptyField.length > 0) {
    const message = `invalid request parameter! require (${emptyField})`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.BAD_REQUEST).json(response)
  }

  try {
    const activeSemester = await getActiveSemester()
    body.studyProgramId = uuidv4()
    body.studyProgramSemesterId = activeSemester?.semesterId ?? ''
    await StudyProgramModel.create(body)
    const response = ResponseData.default
    response.data = { message: 'success' }
    return res.status(StatusCodes.CREATED).json(response)
  } catch (error: any) {
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}
