import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteAttributes, ZygoteModel } from "./zygote";
import { SemesterModel } from "./semester";

export interface MbkmProgramAttributes extends ZygoteAttributes {
	mbkm_program_id: string;
	mbkm_program_created_by: string;
	mbkm_program_name: string;
	mbkm_program_category: string;
	mbkm_program_syllabus: string;
	mbkm_program_department_id: string;
	mbkm_program_department_name: string;
	mbkm_program_study_program_id: string;
	mbkm_program_study_program_name: string;
	mbkm_program_semester_id: string;
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type MbkmProgramCreationAttributes = Optional<
	MbkmProgramAttributes,
	"id" | "created_on" | "modified_on"
>;

// We need to declare an interface for our model that is basically what our class would be
interface MbkmProgramInstance
	extends Model<MbkmProgramAttributes, MbkmProgramCreationAttributes>,
		MbkmProgramAttributes {}

export const MbkmProgramModel = sequelize.define<MbkmProgramInstance>(
	"mbkm_program",
	{
		...ZygoteModel,
		mbkm_program_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		mbkm_program_created_by: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		mbkm_program_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		mbkm_program_category: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		mbkm_program_syllabus: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		mbkm_program_department_id: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		mbkm_program_department_name: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		mbkm_program_study_program_id: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		mbkm_program_study_program_name: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		mbkm_program_semester_id: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		...sequelize,
		timestamps: false,
		tableName: "mbkm_program",
		deletedAt: false,
		paranoid: true,
		underscored: true,
		freezeTableName: true,
		engine: "InnoDB",
	}
);

MbkmProgramModel.hasOne(SemesterModel, {
	sourceKey: "mbkm_program_semester_id",
	foreignKey: "semester_id",
});
