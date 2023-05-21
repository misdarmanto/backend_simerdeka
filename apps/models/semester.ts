import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteAttributes, ZygoteModel } from "./zygote";

export interface SemesterAttributes extends ZygoteAttributes {
	semester_id: string;
	semester_created_by: string;
	semester_name: string;
	semester_type: "ganjil" | "genap";
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type SemesterCreationAttributes = Optional<
	SemesterAttributes,
	"id" | "created_on" | "modified_on"
>;

// We need to declare an interface for our model that is basically what our class would be
interface SemesterInstance
	extends Model<SemesterAttributes, SemesterCreationAttributes>,
		SemesterAttributes {}

export const SemesterModel = sequelize.define<SemesterInstance>(
	"semester",
	{
		...ZygoteModel,
		semester_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		semester_created_by: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		semester_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		semester_type: {
			type: DataTypes.ENUM("ganjil", "genap"),
			allowNull: false,
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
