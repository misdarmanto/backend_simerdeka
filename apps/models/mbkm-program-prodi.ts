import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteAttributes, ZygoteModel } from "./zygote";
import { SemesterModel } from "./semester";
import { StudyProgramModel } from "./study-program";
import { DepartmentModel } from "./department";
import { MbkmProgramModel } from "./mbkm-program";

export interface MbkmProgramProdiAttributes extends ZygoteAttributes {
	mbkm_program_prodi_id: string;
	mbkm_program_prodi_program_id: string;
	mbkm_program_prodi_program_name: string;
	mbkm_program_prodi_study_program_id: string;
	mbkm_program_prodi_study_program_name: string;
	mbkm_program_prodi_department_id: string;
	mbkm_program_prodi_department_name: string;
	mbkm_program_prodi_semester_id: string;
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type MbkmProgramProdiCreationAttributes = Optional<
	MbkmProgramProdiAttributes,
	"id" | "created_on" | "modified_on"
>;

// We need to declare an interface for our model that is basically what our class would be
interface MbkmProgramProdiInstance
	extends Model<MbkmProgramProdiAttributes, MbkmProgramProdiCreationAttributes>,
		MbkmProgramProdiAttributes {}

export const MbkmProgramProdiModel = sequelize.define<MbkmProgramProdiInstance>(
	"mbkm_program_prodi",
	{
		...ZygoteModel,
		mbkm_program_prodi_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		mbkm_program_prodi_program_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		mbkm_program_prodi_program_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		mbkm_program_prodi_study_program_id: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		mbkm_program_prodi_study_program_name: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		mbkm_program_prodi_department_id: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		mbkm_program_prodi_department_name: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		mbkm_program_prodi_semester_id: {
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
	sourceKey: "mbkm_program_prodi_program_id",
	foreignKey: "mbkm_program_id",
});

MbkmProgramProdiModel.hasOne(SemesterModel, {
	sourceKey: "mbkm_program_prodi_semester_id",
	foreignKey: "semester_id",
});

MbkmProgramProdiModel.hasOne(StudyProgramModel, {
	sourceKey: "mbkm_program_prodi_study_program_id",
	foreignKey: "study_program_id",
});

MbkmProgramProdiModel.hasOne(DepartmentModel, {
	sourceKey: "mbkm_program_prodi_department_id",
	foreignKey: "department_id",
});
