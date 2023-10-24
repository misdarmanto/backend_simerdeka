/* eslint-disable @typescript-eslint/indent */
import { DataTypes, type Model, type Optional } from 'sequelize'
import { sequelize } from '.'
import { type ZygoteAttributes, ZygoteModel } from './zygote'
import moment from 'moment'

export interface LogActivityAttributes extends ZygoteAttributes {
  logActivityId: string
  logActivityCreatedBy: string
  logActivityMessage: string
  logActivitySemesterId: string
  logActivityType: 'info' | 'warning' | 'error'
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type LogActivityCreationAttributes = Optional<
  LogActivityAttributes,
  'id' | 'createdOn' | 'modifiedOn'
>

// We need to declare an interface for our model that is basically what our class would be
interface LogActivityInstance
  extends Model<LogActivityAttributes, LogActivityCreationAttributes>,
    LogActivityAttributes {}

export const LogActivityModel = sequelize.define<LogActivityInstance>(
  'log-activities',
  {
    ...ZygoteModel,
    logActivityId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    logActivityCreatedBy: {
      type: DataTypes.STRING,
      allowNull: false
    },
    logActivityMessage: {
      type: DataTypes.STRING,
      allowNull: false
    },
    logActivitySemesterId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    logActivityType: {
      type: DataTypes.ENUM('info', 'warning', 'error'),
      allowNull: false,
      defaultValue: 'info'
    }
  },
  {
    ...sequelize,
    timestamps: false,
    tableName: 'log-activities',
    deletedAt: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB',
    hooks: {
      beforeCreate: (record, options) => {
        const now = moment().add(7, 'hours').format('YYYY-MM-DD HH:mm:ss')
        record.createdOn = now
        record.modifiedOn = null
      },
      beforeUpdate: (record, options) => {
        const now = moment().add(7, 'hours').format('YYYY-MM-DD HH:mm:ss')
        record.createdOn = now
      }
    }
  }
)
