/* eslint-disable @typescript-eslint/indent */
import { DataTypes, type Model, type Optional } from 'sequelize'
import { sequelize } from '.'
import { type ZygoteAttributes, ZygoteModel } from './zygote'

export interface StudyProgramAttributes extends ZygoteAttributes {
  studyProgramId: string
  studyProgramName: string
  studyProgramEmail: string
  studyProgramIsRegistered: boolean
  studyProgramDepartmentId: string
  studyProgramDepartmentName: string
  studyProgramSemesterId: string
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type StudyProgramCreationAttributes = Optional<
  StudyProgramAttributes,
  'id' | 'createdOn' | 'modifiedOn'
>

// We need to declare an interface for our model that is basically what our class would be
interface StudyProgramInstance
  extends Model<StudyProgramAttributes, StudyProgramCreationAttributes>,
    StudyProgramAttributes {}

export const StudyProgramModel = sequelize.define<StudyProgramInstance>(
  'study_program',
  {
    ...ZygoteModel,
    studyProgramId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    studyProgramName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    studyProgramEmail: {
      type: DataTypes.STRING,
      allowNull: false
    },
    studyProgramIsRegistered: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    studyProgramDepartmentId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    studyProgramDepartmentName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    studyProgramSemesterId: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    ...sequelize,
    timestamps: false,
    tableName: 'study_program',
    deletedAt: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB'
  }
)
