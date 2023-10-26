/* eslint-disable @typescript-eslint/indent */
import { DataTypes, type Model, type Optional } from 'sequelize'
import { sequelize } from '.'
import { type ZygoteAttributes, ZygoteModel } from './zygote'

export interface MbkmProgramTypeAttributes extends ZygoteAttributes {
  mbkmProgramTypeId: string
  mbkmProgramTypeName: string
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type MbkmProgramTypeCreationAttributes = Optional<
  MbkmProgramTypeAttributes,
  'id' | 'createdOn' | 'modifiedOn'
>

// We need to declare an interface for our model that is basically what our class would be
interface MbkmProgramTypeInstance
  extends Model<MbkmProgramTypeAttributes, MbkmProgramTypeCreationAttributes>,
    MbkmProgramTypeAttributes {}

export const MbkmProgramTypeModel = sequelize.define<MbkmProgramTypeInstance>(
  'mbkm_program_type',
  {
    ...ZygoteModel,
    mbkmProgramTypeId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mbkmProgramTypeName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    ...sequelize,
    timestamps: false,
    tableName: 'mbkm_program_type',
    deletedAt: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB'
  }
)
