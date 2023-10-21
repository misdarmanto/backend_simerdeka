import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { Op } from 'sequelize'
import { requestChecker } from '../../utilities/requestCheker'
import {
  type ReportParticipationAttributes,
  ReportParticipationModel
} from '../../models/report-participation'
import { UserModel } from '../../models/user'
import { StudentModel } from '../../models/student'
import { StudyProgramModel } from '../../models/study-program'
import { getActiveSemester } from '../../utilities/active-semester'

export const update = async (req: any, res: Response): Promise<any> => {
  const body = req.body as ReportParticipationAttributes

  const emptyField = requestChecker({
    requireList: ['reportParticipationId', 'x-user-id'],
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
        userId: { [Op.eq]: req.header('x-user-id') },
        userRole: { [Op.eq]: 'academic' }
      }
    })

    if (user == null) {
      const message = 'access denied!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.UNAUTHORIZED).json(response)
    }

    const reportParticipation = await ReportParticipationModel.findOne({
      where: {
        deleted: { [Op.eq]: 0 },
        reportParticipationId: { [Op.eq]: body.reportParticipationId }
      }
    })

    if (reportParticipation == null) {
      const message = 'not found!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.NOT_FOUND).json(response)
    }

    const newData: ReportParticipationAttributes | any = {
      ...(Boolean(req.body.reportParticipationLetter) && {
        reportParticipationLetter: body.reportParticipationLetter
      }),
      ...(Boolean(req.body.reportParticipationStatus) && {
        reportParticipationStatus: body.reportParticipationStatus
      }),
      ...(Boolean(req.body.reportParticipationStatusMessage) && {
        reportParticipationStatusMessage: body.reportParticipationStatusMessage
      })
    }

    await ReportParticipationModel.update(newData, {
      where: {
        deleted: { [Op.eq]: 0 },
        reportParticipationId: { [Op.eq]: body.reportParticipationId }
      }
    })

    if (req.body.reportParticipationStatus === 'accepted') {
      const student = await StudentModel.findOne({
        where: {
          deleted: { [Op.eq]: 0 },
          studentId: {
            [Op.eq]: reportParticipation.reportParticipationStudentId
          }
        }
      })

      const activeSemester = await getActiveSemester()

      const studyProgram = await StudyProgramModel.findOne({
        where: {
          deleted: { [Op.eq]: 0 },
          studyProgramId: {
            [Op.eq]: reportParticipation.reportParticipationStudyProgramId
          }
        }
      })

      if (student != null && activeSemester != null) {
        student.studentSemesterId = activeSemester.semesterId
        student.studentIsRegistered = true
        void student.save()
      }

      if (studyProgram != null && activeSemester != null) {
        studyProgram.studyProgramSemesterId = activeSemester.semesterId
        studyProgram.studyProgramIsRegistered = true
        void studyProgram.save()
      }
    }

    const response = ResponseData.default
    response.data = { message: 'success' }
    return res.status(StatusCodes.OK).json(response)
  } catch (error: any) {
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}
