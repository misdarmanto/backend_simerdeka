import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteAttributes, ZygoteModel } from "./zygote";
import { SemesterModel } from "./semester";
import { ListOfMajorModel } from "./list-of-major";
import { ListOfStudyModel } from "./list-study-program";

export interface ProgramForMajorAttributes extends ZygoteAttributes {
	program_major_id: string;
	program_major_created_by: string;
	program_major_name: string;
	program_major_type: string;
	major_id: string;
	study_program_id: string;
	semester_id: string;
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type ProgramForMajorCreationAttributes = Optional<
	ProgramForMajorAttributes,
	"id" | "created_on" | "modified_on"
>;

// We need to declare an interface for our model that is basically what our class would be
interface ProgramForMajorInstance
	extends Model<ProgramForMajorAttributes, ProgramForMajorCreationAttributes>,
		ProgramForMajorAttributes {}

export const ProgramForMajorModel = sequelize.define<ProgramForMajorInstance>(
	"program_for_major",
	{
		...ZygoteModel,
		program_major_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		program_major_created_by: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		program_major_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		program_major_type: {
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
		tableName: "program_for_major",
		deletedAt: false,
		paranoid: true,
		underscored: true,
		freezeTableName: true,
		engine: "InnoDB",
	}
);

ProgramForMajorModel.hasOne(SemesterModel, {
	sourceKey: "semester_id",
	foreignKey: "semester_id",
});

ProgramForMajorModel.hasOne(ListOfMajorModel, {
	sourceKey: "major_id",
	foreignKey: "major_id",
});

ProgramForMajorModel.hasOne(ListOfStudyModel, {
	sourceKey: "study_program_id",
	foreignKey: "study_program_id",
});
