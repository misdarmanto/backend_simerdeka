import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteAttributes, ZygoteModel } from "./zygote";

export interface Lp3mAttributes extends ZygoteAttributes {
	lp3m_id: string;
	lp3m_name: string;
	lp3m_email: string;
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type Lp3mCreationAttributes = Optional<
	Lp3mAttributes,
	"id" | "created_on" | "modified_on"
>;

// We need to declare an interface for our model that is basically what our class would be
interface Lp3mInstance
	extends Model<Lp3mAttributes, Lp3mCreationAttributes>,
		Lp3mAttributes {}

export const Lp3mModel = sequelize.define<Lp3mInstance>(
	"lp3m",
	{
		...ZygoteModel,
		lp3m_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lp3m_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lp3m_email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		...sequelize,
		timestamps: false,
		tableName: "lp3m",
		deletedAt: false,
		paranoid: true,
		underscored: true,
		freezeTableName: true,
		engine: "InnoDB",
	}
);
