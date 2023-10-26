import { createLogActivity } from './create'
import { findAllLogActivity, findDetialLogActivity } from './find'

export const LogActivityController = {
  findAll: findAllLogActivity,
  findDetail: findDetialLogActivity,
  create: createLogActivity
}
