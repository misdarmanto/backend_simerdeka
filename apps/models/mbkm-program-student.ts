import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteAttributes, ZygoteModel } from "./zygote";
import { SemesterModel } from "./semester";
import { UserModel } from "./user";
import { MbkmProgramModel } from "./mbkm-program";

export interface MbkmProgramStudentAttributes extends ZygoteAttributes {
	mbkm_program_student_id: string;
	mbkm_program_student_sks: number;
	mbkm_program_id: string;
	student_id: string;
	major_id: string;
	study_program_id: string;
	semester_id: string;
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type MbkmProgramStudentCreationAttributes = Optional<
	MbkmProgramStudentAttributes,
	"id" | "created_on" | "modified_on"
>;

// We need to declare an interface for our model that is basically what our class would be
interface MbkmProgramStudentInstance
	extends Model<MbkmProgramStudentAttributes, MbkmProgramStudentCreationAttributes>,
		MbkmProgramStudentAttributes {}

export const MbkmProgramStudentModel = sequelize.define<MbkmProgramStudentInstance>(
	"mbkm_program_student",
	{
		...ZygoteModel,
		mbkm_program_student_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		mbkm_program_student_sks: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		mbkm_program_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		student_id: {
			type: DataTypes.STRING,
			allowNull: false,
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
		tableName: "mbkm_program_student",
		deletedAt: false,
		paranoid: true,
		underscored: true,
		freezeTableName: true,
		engine: "InnoDB",
	}
);

MbkmProgramStudentModel.hasOne(SemesterModel, {
	sourceKey: "semester_id",
	foreignKey: "semester_id",
});

MbkmProgramStudentModel.hasOne(UserModel, {
	sourceKey: "student_id",
	foreignKey: "user_id",
});

MbkmProgramStudentModel.hasOne(MbkmProgramModel, {
	sourceKey: "mbkm_program_id",
	foreignKey: "mbkm_program_id",
});
