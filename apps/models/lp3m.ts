/* eslint-disable @typescript-eslint/indent */
import { DataTypes, type Model, type Optional } from 'sequelize'
import { sequelize } from '.'
import { type ZygoteAttributes, ZygoteModel } from './zygote'

export interface Lp3mAttributes extends ZygoteAttributes {
  lp3mId: string
  lp3mName: string
  lp3mEmail: string
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type Lp3mCreationAttributes = Optional<Lp3mAttributes, 'id' | 'createdOn' | 'modifiedOn'>

// We need to declare an interface for our model that is basically what our class would be
interface Lp3mInstance
  extends Model<Lp3mAttributes, Lp3mCreationAttributes>,
    Lp3mAttributes {}

export const Lp3mModel = sequelize.define<Lp3mInstance>(
  'lp3m',
  {
    ...ZygoteModel,
    lp3mId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lp3mName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lp3mEmail: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    ...sequelize,
    timestamps: false,
    tableName: 'lp3m',
    deletedAt: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB'
  }
)
