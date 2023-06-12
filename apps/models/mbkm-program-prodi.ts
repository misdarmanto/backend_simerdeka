import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteAttributes, ZygoteModel } from "./zygote";
import { SemesterModel } from "./semester";
import { StudyProgramModel } from "./study-program";
import { DepartmentModel } from "./department";
import { MbkmProgramModel } from "./mbkm-program";

export interface MbkmProgramProdiAttributes extends ZygoteAttributes {
	mbkmProgramProdiId: string;
	mbkmProgramProdiProgramId: string;
	mbkmProgramProdiProgramName: string;
	mbkmProgramProdiStudyProgramId: string;
	mbkmProgramProdiStudyProgramName: string;
	mbkmProgramProdiDepartmentId: string;
	mbkmProgramProdiDepartmentName: string;
	mbkmProgramProdiSemesterId: string;
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type MbkmProgramProdiCreationAttributes = Optional<
	MbkmProgramProdiAttributes,
	"id" | "createdOn" | "modifiedOn"
>;

// We need to declare an interface for our model that is basically what our class would be
interface MbkmProgramProdiInstance
	extends Model<MbkmProgramProdiAttributes, MbkmProgramProdiCreationAttributes>,
		MbkmProgramProdiAttributes {}

export const MbkmProgramProdiModel = sequelize.define<MbkmProgramProdiInstance>(
	"mbkm_program_prodi",
	{
		...ZygoteModel,
		mbkmProgramProdiId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		mbkmProgramProdiProgramId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		mbkmProgramProdiProgramName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		mbkmProgramProdiStudyProgramId: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		mbkmProgramProdiStudyProgramName: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		mbkmProgramProdiDepartmentId: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		mbkmProgramProdiDepartmentName: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		mbkmProgramProdiSemesterId: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		...sequelize,
		timestamps: false,
		tableName: "mbkm_program_prodi",
		deletedAt: false,
		paranoid: true,
		underscored: true,
		freezeTableName: true,
		engine: "InnoDB",
	}
);

MbkmProgramProdiModel.hasOne(MbkmProgramModel, {
	sourceKey: "mbkmProgramProdiProgramId",
	foreignKey: "mbkm_program_id",
});

MbkmProgramProdiModel.hasOne(SemesterModel, {
	sourceKey: "mbkmProgramProdiSemesterId",
	foreignKey: "semester_id",
});

MbkmProgramProdiModel.hasOne(StudyProgramModel, {
	sourceKey: "mbkmProgramProdiStudyProgramId",
	foreignKey: "study_program_id",
});

MbkmProgramProdiModel.hasOne(DepartmentModel, {
	sourceKey: "mbkmProgramProdiDepartmentId",
	foreignKey: "department_id",
});
