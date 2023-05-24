import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteAttributes, ZygoteModel } from "./zygote";
import { SemesterModel } from "./semester";
import { ListOfMajorModel } from "./list-of-major";

export interface ProgramForStudyProgramAttributes extends ZygoteAttributes {
	program_study_program_id: string;
	program_study_program_created_by: string;
	program_study_program_name: string;
	program_study_program_type: string;
	major_id: string;
	study_program_id: string;
	semester_id: string;
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type ProgramForStudyProgramCreationAttributes = Optional<
	ProgramForStudyProgramAttributes,
	"id" | "created_on" | "modified_on"
>;

// We need to declare an interface for our model that is basically what our class would be
interface ProgramForStudyProgramInstance
	extends Model<
			ProgramForStudyProgramAttributes,
			ProgramForStudyProgramCreationAttributes
		>,
		ProgramForStudyProgramAttributes {}

export const ProgramForStudyProgramModel =
	sequelize.define<ProgramForStudyProgramInstance>(
		"program_for_study_program",
		{
			...ZygoteModel,
			program_study_program_id: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			program_study_program_created_by: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			program_study_program_name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			program_study_program_type: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			major_id: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			study_program_id: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			semester_id: {
				type: DataTypes.STRING,
				allowNull: true,
			},
		},
		{
			...sequelize,
			timestamps: false,
			tableName: "program_for_study_program",
			deletedAt: false,
			paranoid: true,
			underscored: true,
			freezeTableName: true,
			engine: "InnoDB",
		}
	);

ProgramForStudyProgramModel.hasOne(SemesterModel, {
	sourceKey: "semester_id",
	foreignKey: "semester_id",
});

ProgramForStudyProgramModel.hasOne(ListOfMajorModel, {
	sourceKey: "major_id",
	foreignKey: "major_id",
});
