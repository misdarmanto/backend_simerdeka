import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { Op } from 'sequelize'
import { StudyProgramModel } from '../../models/study-program'
import { StudentModel } from '../../models/student'
import { MbkmProgramModel } from '../../models/mbkm-program'
import { getActiveSemester } from '../../utilities/active-semester'

export const findAll = async (req: any, res: Response): Promise<any> => {
  try {
    const activeSemester = await getActiveSemester()

    const totalStudent = await StudentModel.count({
      where: {
        deleted: { [Op.eq]: 0 },
        studentSemesterId: { [Op.eq]: activeSemester?.semesterId },
        studentIsRegistered: { [Op.eq]: true }
      }
    })

    const totalStudyProgram = await StudyProgramModel.count({
      where: {
        deleted: { [Op.eq]: 0 },
        studyProgramSemesterId: { [Op.eq]: activeSemester?.semesterId },
        studyProgramIsRegistered: { [Op.eq]: true }
      }
    })

    const totalProgram = await MbkmProgramModel.count({
      where: {
        deleted: { [Op.eq]: 0 },
        mbkmProgramSemesterId: { [Op.eq]: activeSemester?.semesterId }
      }
    })

    const response = ResponseData.default

    response.data = {
      totalStudent,
      totalStudyProgram,
      totalProgram
    }
    return res.status(StatusCodes.OK).json(response)
  } catch (error: any) {
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}
