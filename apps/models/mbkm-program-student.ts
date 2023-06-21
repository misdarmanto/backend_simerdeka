import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteAttributes, ZygoteModel } from "./zygote";
import { SemesterModel } from "./semester";
import { UserModel } from "./user";
import { MbkmProgramModel } from "./mbkm-program";

export interface MbkmProgramStudentAttributes extends ZygoteAttributes {
	mbkmProgramStudentId: string;
	mbkmProgramStudentSks: number;
	mbkmProgramId: string;
	studentId: string;
	majorId: string;
	studyProgramId: string;
	semesterId: string;
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type MbkmProgramStudentCreationAttributes = Optional<
	MbkmProgramStudentAttributes,
	"id" | "createdOn" | "modifiedOn"
>;

// We need to declare an interface for our model that is basically what our class would be
interface MbkmProgramStudentInstance
	extends Model<MbkmProgramStudentAttributes, MbkmProgramStudentCreationAttributes>,
		MbkmProgramStudentAttributes {}

export const MbkmProgramStudentModel = sequelize.define<MbkmProgramStudentInstance>(
	"mbkm_program_student",
	{
		...ZygoteModel,
		mbkmProgramStudentId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		mbkmProgramStudentSks: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		mbkmProgramId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		studentId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		majorId: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		studyProgramId: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		semesterId: {
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
	sourceKey: "semesterId",
	foreignKey: "semesterId",
});

MbkmProgramStudentModel.hasOne(UserModel, {
	sourceKey: "studentId",
	foreignKey: "user_id",
});

MbkmProgramStudentModel.hasOne(MbkmProgramModel, {
	sourceKey: "mbkmProgramId",
	foreignKey: "mbkmProgramId",
});
