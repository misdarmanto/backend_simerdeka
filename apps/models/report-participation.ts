/* eslint-disable @typescript-eslint/indent */
import { DataTypes, type Model, type Optional } from 'sequelize'
import { sequelize } from '.'
import { type ZygoteAttributes, ZygoteModel } from './zygote'
import { StudentModel } from './student'

export interface ReportParticipationAttributes extends ZygoteAttributes {
  reportParticipationId: string
  reportParticipationLetter: string
  reportParticipationStatusMessage: string
  reportParticipationStatus: 'waiting' | 'accepted' | 'rejected'
  reportParticipationStudyProgramId: string
  reportParticipationDepartmentId: string
  reportParticipationStudentId: string
  reportParticipationSemesterId: string
  reportParticipationMbkmProgramCategory: string
  reportParticipationMbkmProgramName: string
  reportParticipationLetterOfAcceptance: string
  reportParticipationRecomendationLetter: string
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type ReportParticipationCreationAttributes = Optional<
  ReportParticipationAttributes,
  'id' | 'createdOn' | 'modifiedOn'
>

// We need to declare an interface for our model that is basically what our class would be
interface ReportParticipationInstance
  extends Model<ReportParticipationAttributes, ReportParticipationCreationAttributes>,
    ReportParticipationAttributes {}

export const ReportParticipationModel = sequelize.define<ReportParticipationInstance>(
  'report_participation',
  {
    ...ZygoteModel,
    reportParticipationId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reportParticipationLetter: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reportParticipationStatusMessage: {
      type: DataTypes.STRING,
      allowNull: true
    },
    reportParticipationStatus: {
      type: DataTypes.ENUM('waiting', 'accepted', 'rejected'),
      allowNull: true,
      defaultValue: 'waiting'
    },
    reportParticipationStudentId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reportParticipationDepartmentId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reportParticipationStudyProgramId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reportParticipationSemesterId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reportParticipationMbkmProgramCategory: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reportParticipationMbkmProgramName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reportParticipationLetterOfAcceptance: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reportParticipationRecomendationLetter: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    ...sequelize,
    timestamps: false,
    tableName: 'report_participation',
    deletedAt: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB'
  }
)

ReportParticipationModel.hasOne(StudentModel, {
  sourceKey: 'reportParticipationStudentId',
  foreignKey: 'studentId'
})
