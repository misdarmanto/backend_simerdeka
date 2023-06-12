import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteAttributes, ZygoteModel } from "./zygote";

export interface SemesterAttributes extends ZygoteAttributes {
	semesterId: string;
	semesterCreatedBy: string;
	semesterName: string;
	semesterStatus: "active" | "non-active";
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type SemesterCreationAttributes = Optional<
	SemesterAttributes,
	"id" | "createdOn" | "modifiedOn"
>;

// We need to declare an interface for our model that is basically what our class would be
interface SemesterInstance
	extends Model<SemesterAttributes, SemesterCreationAttributes>,
		SemesterAttributes {}

export const SemesterModel = sequelize.define<SemesterInstance>(
	"semester",
	{
		...ZygoteModel,
		semesterId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		semesterCreatedBy: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		semesterName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		semesterStatus: {
			type: DataTypes.ENUM("active", "non-active"),
			allowNull: true,
			defaultValue: "active",
		},
	},
	{
		...sequelize,
		timestamps: false,
		tableName: "semester",
		deletedAt: false,
		paranoid: true,
		underscored: true,
		freezeTableName: true,
		engine: "InnoDB",
	}
);
