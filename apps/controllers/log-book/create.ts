import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { requestChecker } from '../../utilities/requestCheker'
import { v4 as uuidv4 } from 'uuid'
import { StudentModel } from '../../models/student'
import { Op } from 'sequelize'
import { type LogBookAttributes, LogBookModel } from '../../models/log-book'
import { getActiveSemester } from '../../utilities/active-semester'

export const create = async (req: any, res: Response): Promise<any> => {
  const body = req.body as LogBookAttributes
  const emptyField = requestChecker({
    requireList: ['x-user-id', 'logBookReportFile', 'logBookReportWeek'],
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
        studentId: { [Op.eq]: req.header('x-user-id') },
        studentIsRegistered: { [Op.eq]: true }
      }
    })

    if (student == null) {
      const message = 'access denied!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.UNAUTHORIZED).json(response)
    }

    const activeSemester = await getActiveSemester()

    body.logBookId = uuidv4()
    body.logBookSemesterId = activeSemester?.semesterId ?? ''
    body.logBookStudentId = student.studentId
    body.logBookStudentName = student.studentName
    body.logBookStudentNim = student.studentNim
    body.logBookStudyProgramId = student.studentStudyProgramId
    body.logBookStudyProgramName = student.studentStudyProgramName
    body.logBookDepartmentId = student.studentDepartmentId
    body.logBookDepartmentName = student.studentDepartmentName
    await LogBookModel.create(body)

    const response = ResponseData.default
    response.data = { message: 'success' }
    return res.status(StatusCodes.CREATED).json(response)
  } catch (error: any) {
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}
