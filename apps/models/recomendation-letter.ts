/* eslint-disable @typescript-eslint/indent */
import { DataTypes, type Model, type Optional } from 'sequelize'
import { sequelize } from '.'
import { type ZygoteAttributes, ZygoteModel } from './zygote'
import { StudentModel } from './student'

export interface RecomendationLetterAttributes extends ZygoteAttributes {
  recomendationLetterId: string
  recomendationLetterStudentTranskrip: string
  recomendationLetterDosenWali: string
  recomendationLetterSyllabus: string
  recomendationLetterApprovalLetter: string
  recomendationLetterSptjmLetter: string
  recomendationLetterFromStudyProgram: string
  recomendationLetterFromDepartment: string
  recomendationLetterFromLp3m: string
  recomendationLetterFromAcademic: string
  recomendationLetterProgramName: string
  recomendationLetterProgramDescription: string
  recomendationLetterProgramCorrelation: string
  recomendationLetterStatus: 'waiting' | 'accepted' | 'rejected'
  recomendationLetterStatusMessage: string
  recomendationLetterAssignToStudent: boolean
  recomendationLetterAssignToStudyProgram: boolean
  recomendationLetterAssignToDepartment: boolean
  recomendationLetterAssignToLp3m: boolean
  recomendationLetterAssignToAcademic: boolean
  recomendationLetterStudyProgramId: string
  recomendationLetterDepartmentId: string
  recomendationLetterStudentId: string
  recomendationLetterSemesterId: string
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type RecomendationLetterCreationAttributes = Optional<
  RecomendationLetterAttributes,
  'id' | 'createdOn' | 'modifiedOn'
>

// We need to declare an interface for our model that is basically what our class would be
interface RecomendationLetterInstance
  extends Model<RecomendationLetterAttributes, RecomendationLetterCreationAttributes>,
    RecomendationLetterAttributes {}

export const RecomendationLetterModel = sequelize.define<RecomendationLetterInstance>(
  'recomendation_letter',
  {
    ...ZygoteModel,
    recomendationLetterId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    recomendationLetterStudentId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    recomendationLetterDepartmentId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    recomendationLetterStudyProgramId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    recomendationLetterStudentTranskrip: {
      type: DataTypes.STRING,
      allowNull: false
    },
    recomendationLetterDosenWali: {
      type: DataTypes.STRING,
      allowNull: false
    },
    recomendationLetterSyllabus: {
      type: DataTypes.STRING,
      allowNull: true
    },
    recomendationLetterApprovalLetter: {
      type: DataTypes.STRING,
      allowNull: false
    },
    recomendationLetterSptjmLetter: {
      type: DataTypes.STRING,
      allowNull: true
    },
    recomendationLetterFromStudyProgram: {
      type: DataTypes.STRING,
      allowNull: true
    },
    recomendationLetterFromDepartment: {
      type: DataTypes.STRING,
      allowNull: true
    },
    recomendationLetterFromLp3m: {
      type: DataTypes.STRING,
      allowNull: true
    },
    recomendationLetterFromAcademic: {
      type: DataTypes.STRING,
      allowNull: true
    },
    recomendationLetterProgramName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    recomendationLetterProgramDescription: {
      type: DataTypes.STRING,
      allowNull: false
    },
    recomendationLetterProgramCorrelation: {
      type: DataTypes.STRING,
      allowNull: false
    },
    recomendationLetterStatus: {
      type: DataTypes.ENUM('waiting', 'accepted', 'rejected'),
      allowNull: true,
      defaultValue: 'waiting'
    },
    recomendationLetterStatusMessage: {
      type: DataTypes.STRING,
      allowNull: true
    },
    recomendationLetterAssignToStudent: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    recomendationLetterAssignToStudyProgram: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    recomendationLetterAssignToDepartment: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    recomendationLetterAssignToLp3m: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    recomendationLetterAssignToAcademic: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    recomendationLetterSemesterId: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    ...sequelize,
    timestamps: false,
    tableName: 'recomendation_letter',
    deletedAt: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB'
  }
)

RecomendationLetterModel.hasOne(StudentModel, {
  sourceKey: 'recomendationLetterStudentId',
  foreignKey: 'studentId'
})
