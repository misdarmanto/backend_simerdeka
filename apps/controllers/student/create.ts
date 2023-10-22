import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { requestChecker } from '../../utilities/requestCheker'
import { v4 as uuidv4 } from 'uuid'
import { type StudentAttributes, StudentModel } from '../../models/student'
import { getActiveSemester } from '../../utilities/active-semester'

export const create = async (req: any, res: Response): Promise<any> => {
  const body = req.body as StudentAttributes

  const emptyField = requestChecker({
    requireList: [
      'student_name',
      'student_nim',
      'student_email',
      'student_department_id',
      'student_department_name',
      'student_study_program_id',
      'student_study_program_name'
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
    body.studentSemesterId = activeSemester?.semesterId ?? ''
    body.studentId = uuidv4()
    await StudentModel.create(body)
    const response = ResponseData.default
    response.data = { message: 'success' }
    return res.status(StatusCodes.CREATED).json(response)
  } catch (error: any) {
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}
