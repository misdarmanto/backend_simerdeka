import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteAttributes, ZygoteModel } from "./zygote";

export interface ProgramAttributes extends ZygoteAttributes {
	program_id: string;
	program_created_by: string;
	program_name: string;
	program_description: string;
	program_type: string;
	program_jurusan_id: string;
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type ProgramCreationAttributes = Optional<
	ProgramAttributes,
	"id" | "created_on" | "modified_on"
>;

// We need to declare an interface for our model that is basically what our class would be
interface ProgramInstance
	extends Model<ProgramAttributes, ProgramCreationAttributes>,
		ProgramAttributes {}

export const ProgramModel = sequelize.define<ProgramInstance>(
	"program",
	{
		...ZygoteModel,
		program_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		program_created_by: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		program_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		program_description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		program_type: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		program_jurusan_id: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		...sequelize,
		timestamps: false,
		tableName: "program",
		deletedAt: false,
		paranoid: true,
		underscored: true,
		freezeTableName: true,
		engine: "InnoDB",
	}
);
