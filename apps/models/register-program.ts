import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteAttributes, ZygoteModel } from "./zygote";

export interface RegistrationProgramAttributes extends ZygoteAttributes {
	registration_program_id: string;
	user_id: string;
	program_name: string;
	program_description: string;
	program_owner: string;
	program_type: string;
	lecture_syllabus: string;
	sks_conversion: number;
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type RegistrationProgramCreationAttributes = Optional<
	RegistrationProgramAttributes,
	"id" | "created_on" | "modified_on"
>;

// We need to declare an interface for our model that is basically what our class would be
interface RegistrationProgramInstance
	extends Model<RegistrationProgramAttributes, RegistrationProgramCreationAttributes>,
		RegistrationProgramAttributes {}

export const RegistrationProgramModel = sequelize.define<RegistrationProgramInstance>(
	"registration_program",
	{
		...ZygoteModel,
		registration_program_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		user_id: {
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
		program_owner: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		program_type: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		lecture_syllabus: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		sks_conversion: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		...sequelize,
		timestamps: false,
		tableName: "registration_program",
		deletedAt: false,
		paranoid: true,
		underscored: true,
		freezeTableName: true,
		engine: "InnoDB",
	}
);
