import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { requestChecker } from '../../utilities/requestCheker'
import { v4 as uuidv4 } from 'uuid'
import { Op } from 'sequelize'
import { type MataKuliahAttributes, MataKuliahModel } from '../../models/matkul'
import { StudyProgramModel } from '../../models/study-program'
import { getActiveSemester } from '../../utilities/active-semester'

export const create = async (req: any, res: Response): Promise<any> => {
  const body = req.body as MataKuliahAttributes
  const emptyField = requestChecker({
    requireList: ['x-user-id', 'mataKuliahName', 'mataKuliahSksTotal'],
    requestData: { ...req.body, ...req.headers }
  })

  if (emptyField.length > 0) {
    const message = `invalid request parameter! require (${emptyField})`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.BAD_REQUEST).json(response)
  }

  try {
    const studyProgram = await StudyProgramModel.findOne({
      where: {
        deleted: { [Op.eq]: 0 },
        studyProgramId: { [Op.eq]: req.header('x-user-id') }
      }
    })

    if (studyProgram == null) {
      const message = 'access denied!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.UNAUTHORIZED).json(response)
    }

    const activeSemester = await getActiveSemester()

    body.mataKuliahId = uuidv4()
    body.mataKuliahStudyProgramId = studyProgram.studyProgramId
    body.mataKuliahStudyProgramName = studyProgram.studyProgramName
    body.mataKuliahDepartmentId = studyProgram.studyProgramDepartmentId
    body.mataKuliahDepartmentName = studyProgram.studyProgramDepartmentName
    body.mataKuliahSemesterId = activeSemester?.semesterId ?? ''
    await MataKuliahModel.create(body)

    const response = ResponseData.default
    response.data = { message: 'success' }
    return res.status(StatusCodes.CREATED).json(response)
  } catch (error: any) {
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}
