/* eslint-disable @typescript-eslint/indent */
import { DataTypes, type Model, type Optional } from 'sequelize'
import { sequelize } from '.'
import { type ZygoteAttributes, ZygoteModel } from './zygote'

export interface UserAttributes extends ZygoteAttributes {
  userId: string
  userName: string
  userEmail: string
  userRole: 'student' | 'studyProgram' | 'department' | 'lp3m' | 'academic'
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type UserCreationAttributes = Optional<UserAttributes, 'id' | 'createdOn' | 'modifiedOn'>

// We need to declare an interface for our model that is basically what our class would be
interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {}

export const UserModel = sequelize.define<UserInstance>(
  'user',
  {
    ...ZygoteModel,
    userId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userEmail: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userRole: {
      type: DataTypes.ENUM('student', 'study_program', 'department', 'lp3m', 'academic'),
      allowNull: false
    }
  },
  {
    ...sequelize,
    timestamps: false,
    tableName: 'user',
    deletedAt: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB'
  }
)
