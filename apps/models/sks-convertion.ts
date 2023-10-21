/* eslint-disable @typescript-eslint/indent */
import { DataTypes, type Model, type Optional } from 'sequelize'
import { sequelize } from '.'
import { type ZygoteAttributes, ZygoteModel } from './zygote'
import { SksConvertionSchemaModel } from './sks-convertion-schema'

export interface SksConvertionAttributes extends ZygoteAttributes {
  sksConvertionId: string
  sksConvertionName: string
  sksConvertionCreatedBy: string
  sksConvertionStudyProgramId: string
  sksConvertionMbkmProgramId: string
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type SksConvertionCreationAttributes = Optional<
  SksConvertionAttributes,
  'id' | 'createdOn' | 'modifiedOn'
>

// We need to declare an interface for our model that is basically what our class would be
interface SksConvertionInstance
  extends Model<SksConvertionAttributes, SksConvertionCreationAttributes>,
    SksConvertionAttributes {}

export const SksConvertionModel = sequelize.define<SksConvertionInstance>(
  'sks_convertion',
  {
    ...ZygoteModel,
    sksConvertionId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sksConvertionName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sksConvertionCreatedBy: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sksConvertionStudyProgramId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sksConvertionMbkmProgramId: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    ...sequelize,
    timestamps: false,
    tableName: 'sks_convertion',
    deletedAt: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB'
  }
)

SksConvertionModel.hasOne(SksConvertionSchemaModel, {
  as: 'sksConvertionSchema',
  sourceKey: 'sksConvertionId',
  foreignKey: 'sksConvertionSchemaSksConvertionId'
})
