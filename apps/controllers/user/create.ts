import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { v4 as uuidv4 } from 'uuid'
import { type UserAttributes, UserModel } from '../../models/user'

export const create = async (req: any, res: Response): Promise<any> => {
  //   const body = req.body as UserAttributes

  try {
    const users = req.body.users.map((user: UserAttributes) => ({
      ...user,
      userId: uuidv4()
    }))
    await UserModel.bulkCreate(users)
    const response = ResponseData.default
    response.data = { message: 'success' }
    return res.status(StatusCodes.CREATED).json(response)
  } catch (error: any) {
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}
