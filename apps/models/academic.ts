import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteAttributes, ZygoteModel } from "./zygote";

export interface AcademicAttributes extends ZygoteAttributes {
	academic_id: string;
	academic_name: string;
	academic_email: string;
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type AcademicCreationAttributes = Optional<
	AcademicAttributes,
	"id" | "created_on" | "modified_on"
>;

// We need to declare an interface for our model that is basically what our class would be
interface AcademicInstance
	extends Model<AcademicAttributes, AcademicCreationAttributes>,
		AcademicAttributes {}

export const AcademicModel = sequelize.define<AcademicInstance>(
	"academic",
	{
		...ZygoteModel,
		academic_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		academic_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		academic_email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		...sequelize,
		timestamps: false,
		tableName: "academic",
		deletedAt: false,
		paranoid: true,
		underscored: true,
		freezeTableName: true,
		engine: "InnoDB",
	}
);
