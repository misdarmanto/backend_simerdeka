/* eslint-disable @typescript-eslint/indent */
import { DataTypes, type Model, type Optional } from 'sequelize'
import { sequelize } from '.'
import { type ZygoteAttributes, ZygoteModel } from './zygote'
import { MataKuliahModel } from './matkul'

export interface TranskripAttributes extends ZygoteAttributes {
  transkripId: string
  transkripStudentId: string
  transkripMataKuliahId: string
  transkripMataKuliahGrade: string
  transkripStudyProgramId: string
  transkripDepartmentId: string
  transkripSemesterId: string
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type TranskripCreationAttributes = Optional<
  TranskripAttributes,
  'id' | 'createdOn' | 'modifiedOn'
>

// We need to declare an interface for our model that is basically what our class would be
interface TranskripInstance
  extends Model<TranskripAttributes, TranskripCreationAttributes>,
    TranskripAttributes {}

export const TranskripModel = sequelize.define<TranskripInstance>(
  'transkrip',
  {
    ...ZygoteModel,
    transkripId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    transkripStudentId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    transkripMataKuliahId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    transkripStudyProgramId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    transkripDepartmentId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    transkripMataKuliahGrade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    transkripSemesterId: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    ...sequelize,
    timestamps: false,
    tableName: 'transkrip',
    deletedAt: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB'
  }
)

TranskripModel.hasOne(MataKuliahModel, {
  as: 'mataKuliah',
  sourceKey: 'transkripMataKuliahId',
  foreignKey: 'mataKuliahId'
})
