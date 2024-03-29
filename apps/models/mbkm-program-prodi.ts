/* eslint-disable @typescript-eslint/indent */
import { DataTypes, type Model, type Optional } from 'sequelize'
import { sequelize } from '.'
import { type ZygoteAttributes, ZygoteModel } from './zygote'
import { MbkmProgramModel } from './mbkm-program'

export interface MbkmProgramProdiAttributes extends ZygoteAttributes {
  mbkmProgramProdiId: string
  mbkmProgramProdiProgramId: string
  mbkmProgramProdiStudyProgramId: string
  mbkmProgramProdiStudyProgramName: string
  mbkmProgramProdiDepartmentId: string
  mbkmProgramProdiDepartmentName: string
  mbkmProgramProdiSemesterId: string
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type MbkmProgramProdiCreationAttributes = Optional<
  MbkmProgramProdiAttributes,
  'id' | 'createdOn' | 'modifiedOn'
>

// We need to declare an interface for our model that is basically what our class would be
interface MbkmProgramProdiInstance
  extends Model<MbkmProgramProdiAttributes, MbkmProgramProdiCreationAttributes>,
    MbkmProgramProdiAttributes {}

export const MbkmProgramProdiModel = sequelize.define<MbkmProgramProdiInstance>(
  'mbkm_program_prodi',
  {
    ...ZygoteModel,
    mbkmProgramProdiId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mbkmProgramProdiProgramId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mbkmProgramProdiStudyProgramId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mbkmProgramProdiStudyProgramName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mbkmProgramProdiDepartmentId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mbkmProgramProdiDepartmentName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mbkmProgramProdiSemesterId: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    ...sequelize,
    timestamps: false,
    tableName: 'mbkm_program_prodi',
    deletedAt: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB'
  }
)

MbkmProgramProdiModel.hasOne(MbkmProgramModel, {
  as: 'mbkmPrograms',
  sourceKey: 'mbkmProgramProdiProgramId',
  foreignKey: 'mbkmProgramId'
})

// MbkmProgramProdiModel.hasOne(SemesterModel, {
//   sourceKey: 'mbkmProgramProdiSemesterId',
//   foreignKey: 'semesterId'
// })

// MbkmProgramProdiModel.hasOne(StudyProgramModel, {
//   sourceKey: 'mbkmProgramProdiStudyProgramId',
//   foreignKey: 'studyProgramId'
// })

// MbkmProgramProdiModel.hasOne(DepartmentModel, {
//   sourceKey: 'mbkmProgramProdiDepartmentId',
//   foreignKey: 'departmentId'
// })
