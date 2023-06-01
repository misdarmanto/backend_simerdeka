import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteAttributes, ZygoteModel } from "./zygote";

export interface StudyProgramAttributes extends ZygoteAttributes {
	study_program_id: string;
	study_program_name: string;
	study_program_email: string;
	study_program_is_registered: boolean;
	study_program_department_id: string;
	study_program_department_name: string;
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type StudyProgramCreationAttributes = Optional<
	StudyProgramAttributes,
	"id" | "created_on" | "modified_on"
>;

// We need to declare an interface for our model that is basically what our class would be
interface StudyProgramInstance
	extends Model<StudyProgramAttributes, StudyProgramCreationAttributes>,
		StudyProgramAttributes {}

export const StudyProgramModel = sequelize.define<StudyProgramInstance>(
	"study_program",
	{
		...ZygoteModel,
		study_program_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		study_program_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		study_program_email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		study_program_is_registered: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: false,
		},
		study_program_department_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		study_program_department_name: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		...sequelize,
		timestamps: false,
		tableName: "study_program",
		deletedAt: false,
		paranoid: true,
		underscored: true,
		freezeTableName: true,
		engine: "InnoDB",
	}
);
