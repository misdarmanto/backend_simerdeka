import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { requestChecker } from '../../utilities/requestCheker'
import { v4 as uuidv4 } from 'uuid'
import { Op } from 'sequelize'
import { UserModel } from '../../models/user'
import { type TranskripAttributes, TranskripModel } from '../../models/transkrip'
import { StudentModel } from '../../models/student'
import { getActiveSemester } from '../../utilities/active-semester'

export const create = async (req: any, res: Response): Promise<any> => {
  const requestBody = req.body as TranskripAttributes
  const emptyField = requestChecker({
    requireList: [
      'x-user-id',
      'transkripStudentId',
      'transkripMataKuliahId',
      'transkripMataKuliahGrade'
    ],
    requestData: { ...requestBody, ...req.headers }
  })

  console.log(requestBody)

  if (emptyField.length > 0) {
    const message = `invalid request parameter! require (${emptyField})`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.BAD_REQUEST).json(response)
  }

  try {
    const user = await UserModel.findOne({
      where: {
        deleted: { [Op.eq]: 0 },
        userId: { [Op.eq]: req.header('x-user-id') },
        userRole: { [Op.eq]: 'studyProgram' }
      }
    })

    if (user == null) {
      const message = 'access denied!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.UNAUTHORIZED).json(response)
    }

    const student = await StudentModel.findOne({
      where: {
        deleted: { [Op.eq]: 0 },
        studentId: { [Op.eq]: requestBody.transkripStudentId },
        studentIsRegistered: { [Op.eq]: true }
      }
    })

    if (student == null) {
      const message = 'student not found!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.NOT_FOUND).json(response)
    }

    const activeSemester = await getActiveSemester()

    requestBody.transkripId = uuidv4()
    requestBody.transkripSemesterId = activeSemester?.semesterId ?? ''
    requestBody.transkripStudentId = student.studentId
    requestBody.transkripStudyProgramId = student.studentStudyProgramId
    requestBody.transkripDepartmentId = student.studentDepartmentId
    await TranskripModel.create(requestBody)

    const response = ResponseData.default
    response.data = { message: 'success' }
    return res.status(StatusCodes.CREATED).json(response)
  } catch (error: any) {
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}
