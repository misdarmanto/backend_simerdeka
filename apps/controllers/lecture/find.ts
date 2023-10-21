import { Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData, ResponseDataAttributes } from '../../utilities/response'
import { requestChecker } from '../../utilities/requestCheker'
import { LECTURE } from '../../data/lecture'

type LectureType = {
  lectureCode: string
  lectureName: string
}

export const findAll = async (req: any, res: Response) => {
  const requestQuery = req.query
  const emptyField = requestChecker({
    requireList: ['lectureName'],
    requestData: requestQuery
  })

  if (emptyField) {
    const message = `invalid request parameter! require (${emptyField})`
    const response = <ResponseDataAttributes>ResponseData.error(message)
    return res.status(StatusCodes.BAD_REQUEST).json(response)
  }

  try {
    const result = LECTURE.filter((item: LectureType) => {
      const input = requestQuery.lectureName.toUpperCase()
      const isMatch = item.lectureName.toUpperCase().search(input) !== -1
      if (isMatch) return item
    })

    const response = <ResponseDataAttributes>ResponseData.default
    response.data = result
    return res.status(StatusCodes.OK).json(response)
  } catch (error: any) {
    console.log(error.message)
    const message = `unable to process request! error ${error.message}`
    const response = <ResponseDataAttributes>ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}

export const findOne = async (req: any, res: Response) => {
  const requestParams = req.params
  const emptyField = requestChecker({
    requireList: ['lectureCode'],
    requestData: requestParams
  })

  if (emptyField) {
    const message = `invalid request parameter! require (${emptyField})`
    const response = <ResponseDataAttributes>ResponseData.error(message)
    return res.status(StatusCodes.BAD_REQUEST).json(response)
  }

  try {
    const result = LECTURE.find((item) => item.lectureCode === requestParams.lectureCode)

    if (!result) {
      const message = `lecture not found!`
      const response = <ResponseDataAttributes>ResponseData.error(message)
      return res.status(StatusCodes.NOT_FOUND).json(response)
    }

    const response = <ResponseDataAttributes>ResponseData.default
    response.data = result
    return res.status(StatusCodes.OK).json(response)
  } catch (error: any) {
    const message = `unable to process request! error ${error.message}`
    const response = <ResponseDataAttributes>ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}
