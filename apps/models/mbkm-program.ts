/* eslint-disable @typescript-eslint/indent */
import { DataTypes, type Model, type Optional } from 'sequelize'
import { sequelize } from '.'
import { type ZygoteAttributes, ZygoteModel } from './zygote'
import { SemesterModel } from './semester'

export interface MbkmProgramAttributes extends ZygoteAttributes {
  mbkmProgramId: string
  mbkmProgramCreatedBy: string
  mbkmProgramName: string
  mbkmProgramCategory: string
  mbkmProgramSyllabus: string
  mbkmProgramSemesterId: string
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type MbkmProgramCreationAttributes = Optional<
  MbkmProgramAttributes,
  'id' | 'createdOn' | 'modifiedOn'
>

// We need to declare an interface for our model that is basically what our class would be
interface MbkmProgramInstance
  extends Model<MbkmProgramAttributes, MbkmProgramCreationAttributes>,
    MbkmProgramAttributes {}

export const MbkmProgramModel = sequelize.define<MbkmProgramInstance>(
  'mbkm_program',
  {
    ...ZygoteModel,
    mbkmProgramId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mbkmProgramCreatedBy: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mbkmProgramName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mbkmProgramCategory: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mbkmProgramSyllabus: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mbkmProgramSemesterId: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    ...sequelize,
    timestamps: false,
    tableName: 'mbkm_program',
    deletedAt: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB'
  }
)

MbkmProgramModel.hasOne(SemesterModel, {
  sourceKey: 'mbkmProgramSemesterId',
  foreignKey: 'semester_id'
})
