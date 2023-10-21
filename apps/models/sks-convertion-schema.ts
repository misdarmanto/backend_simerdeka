/* eslint-disable @typescript-eslint/indent */
import { DataTypes, type Model, type Optional } from 'sequelize'
import { sequelize } from '.'
import { type ZygoteAttributes, ZygoteModel } from './zygote'
import { MataKuliahModel } from './matkul'

export interface SksConvertionSchemaAttributes extends ZygoteAttributes {
  sksConvertionSchemaId: string
  sksConvertionSchemaSksConvertionId: string
  sksConvertionSchemaMatkulId: string
  sksConvertionSchemaStudyProgramId: string
  sksConvertionSchemaMbkmProgramId: string
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type SksConvertionSchemaCreationAttributes = Optional<
  SksConvertionSchemaAttributes,
  'id' | 'createdOn' | 'modifiedOn'
>

// We need to declare an interface for our model that is basically what our class would be
interface SksConvertionSchemaInstance
  extends Model<SksConvertionSchemaAttributes, SksConvertionSchemaCreationAttributes>,
    SksConvertionSchemaAttributes {}

export const SksConvertionSchemaModel = sequelize.define<SksConvertionSchemaInstance>(
  'sks_convertion_schema',
  {
    ...ZygoteModel,
    sksConvertionSchemaId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sksConvertionSchemaSksConvertionId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sksConvertionSchemaMatkulId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sksConvertionSchemaStudyProgramId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sksConvertionSchemaMbkmProgramId: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    ...sequelize,
    timestamps: false,
    tableName: 'sks_convertion_schema',
    deletedAt: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB'
  }
)

SksConvertionSchemaModel.hasMany(MataKuliahModel, {
  as: 'mataKuliah',
  sourceKey: 'sksConvertionSchemaMatkulId',
  foreignKey: 'mataKuliahId'
})
