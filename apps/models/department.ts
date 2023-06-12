import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteAttributes, ZygoteModel } from "./zygote";

export interface DepartmentAttributes extends ZygoteAttributes {
	departmentId: string;
	departmentName: string;
	departmentEmail: string;
	departmentIsRegistered: boolean;
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type DepartmentCreationAttributes = Optional<
	DepartmentAttributes,
	"id" | "createdOn" | "modifiedOn"
>;

// We need to declare an interface for our model that is basically what our class would be
interface DepartmentInstance
	extends Model<DepartmentAttributes, DepartmentCreationAttributes>,
		DepartmentAttributes {}

export const DepartmentModel = sequelize.define<DepartmentInstance>(
	"department",
	{
		...ZygoteModel,
		departmentId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		departmentName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		departmentEmail: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		departmentIsRegistered: {
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
