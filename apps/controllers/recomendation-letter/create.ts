import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { requestChecker } from '../../utilities/requestCheker'
import { v4 as uuidv4 } from 'uuid'
import {
  type RecomendationLetterAttributes,
  RecomendationLetterModel
} from '../../models/recomendation-letter'
import { StudentModel } from '../../models/student'
import { Op } from 'sequelize'
import { getActiveSemester } from '../../utilities/active-semester'

export const create = async (req: any, res: Response): Promise<any> => {
  const body = req.body as RecomendationLetterAttributes

  const emptyField = requestChecker({
    requireList: [
      'x-user-id',
      'recomendationLetterStudentTranskrip',
      'recomendationLetterDosenWali',
      'recomendationLetterSyllabus',
      'recomendationLetterApprovalLetter',
      'recomendationLetterProgramName',
      'recomendationLetterProgramDescription',
      'recomendationLetterProgramCorrelation'
    ],
    requestData: { ...req.body, ...req.headers }
  })

  if (emptyField.length > 0) {
    const message = `invalid request parameter! require (${emptyField})`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.BAD_REQUEST).json(response)
  }

  try {
    const student = await StudentModel.findOne({
      where: {
        deleted: { [Op.eq]: 0 },
        studentId: { [Op.eq]: req.header('x-user-id') }
      }
    })

    if (student == null) {
      const message = 'student not found!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.NOT_FOUND).json(response)
    }

    const activeSemester = await getActiveSemester()

    body.recomendationLetterStudentId = student.studentId
    body.recomendationLetterDepartmentId = student.studentDepartmentId
    body.recomendationLetterStudyProgramId = student.studentStudyProgramId
    body.recomendationLetterId = uuidv4()
    body.recomendationLetterAssignToStudent = true
    body.recomendationLetterAssignToStudyProgram = true
    body.recomendationLetterSemesterId = activeSemester?.semesterId ?? ''

    await RecomendationLetterModel.create(body)
    const response = ResponseData.default
    response.data = { message: 'success' }
    return res.status(StatusCodes.CREATED).json(response)
  } catch (error: any) {
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}
