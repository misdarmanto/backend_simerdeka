import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { Op } from 'sequelize'
import { ResponseData } from '../../utilities/response'
import { requestChecker } from '../../utilities/requestCheker'
import { type UserAttributes, UserModel } from '../../models/user'

export const login = async (req: any, res: Response): Promise<any> => {
  const body = req.body as UserAttributes

  const emptyField = requestChecker({
    requireList: ['userEmail', 'userPassword'],
    requestData: body
  })

  if (emptyField.length > 0) {
    const message = `invalid request parameter! require (${emptyField})`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.BAD_REQUEST).json(response)
  }

  try {
    const user = await UserModel.findOne({
      raw: true,
      where: {
        deleted: { [Op.eq]: 0 },
        userEmail: { [Op.eq]: body.userEmail }
      }
    })

    if (user == null) {
      const message =
        'Akun tidak ditemukan. Silahkan lakukan pendaftaran terlebih dahulu!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.NOT_FOUND).json(response)
    }

    // if (hashPassword(body.user_password) !== user?.user_password) {
    // 	const message = "kombinasi email dan password tidak ditemukan!";
    // 	const response = <ResponseDataAttributes>ResponseData.error(message);
    // 	return res.status(StatusCodes.UNAUTHORIZED).json(response);
    // }

    // const token = generateAccessToken({
    // 	user_id: user.user_id,
    // 	role: body.user_role,
    // });

    // const response = <ResponseDataAttributes>ResponseData.default;
    // response.data = { token };
    // return res.status(StatusCodes.OK).json(response);
  } catch (error: any) {
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}
