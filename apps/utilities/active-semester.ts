import { Op } from 'sequelize'
import { SemesterModel } from '../models/semester'

export const getActiveSemester = async (): Promise<boolean | any> => {
  try {
    const semester = await SemesterModel.findOne({
      where: {
        deleted: { [Op.eq]: 0 },
        semesterStatus: { [Op.eq]: 'active' }
      }
    })
    return semester?.dataValues
  } catch (error: any) {
    throw Error(error.message)
  }
}
