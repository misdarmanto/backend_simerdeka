import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteAttributes, ZygoteModel } from "./zygote";

export interface DepartmentAttributes extends ZygoteAttributes {
	department_id: string;
	department_name: string;
	department_email: string;
	department_is_registered: boolean;
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type DepartmentCreationAttributes = Optional<
	DepartmentAttributes,
	"id" | "created_on" | "modified_on"
>;

// We need to declare an interface for our model that is basically what our class would be
interface DepartmentInstance
	extends Model<DepartmentAttributes, DepartmentCreationAttributes>,
		DepartmentAttributes {}

export const DepartmentModel = sequelize.define<DepartmentInstance>(
	"department",
	{
		...ZygoteModel,
		department_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		department_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		department_email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		department_is_registered: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: false,
		},
	},
	{
		...sequelize,
		timestamps: false,
		tableName: "department",
		deletedAt: false,
		paranoid: true,
		underscored: true,
		freezeTableName: true,
		engine: "InnoDB",
	}
);
