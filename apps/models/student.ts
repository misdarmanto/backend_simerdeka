import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteAttributes, ZygoteModel } from "./zygote";
import { MbkmProgramModel } from "./mbkm-program";
import { TranskripModel } from "./transkrip";

export interface StudentAttributes extends ZygoteAttributes {
	student_id: string;
	student_name: string;
	student_nim: string;
	student_email: string;
	student_is_registered: boolean;
	student_department_id: string;
	student_department_name: string;
	student_study_program_id: string;
	student_study_program_name: string;
	student_mbkm_program_id?: string | null;
	student_transkrip_id: string;
	student_sks_total: number;
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type StudentCreationAttributes = Optional<
	StudentAttributes,
	"id" | "created_on" | "modified_on"
>;

// We need to declare an interface for our model that is basically what our class would be
interface StudentInstance
	extends Model<StudentAttributes, StudentCreationAttributes>,
		StudentAttributes {}

export const StudentModel = sequelize.define<StudentInstance>(
	"student",
	{
		...ZygoteModel,
		student_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		student_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		student_nim: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		student_email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		student_is_registered: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: false,
		},
		student_department_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		student_department_name: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		student_study_program_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		student_study_program_name: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		student_mbkm_program_id: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		student_transkrip_id: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		student_sks_total: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 0,
		},
	},
	{
		...sequelize,
		timestamps: false,
		tableName: "student",
		deletedAt: false,
		paranoid: true,
		underscored: true,
		freezeTableName: true,
		engine: "InnoDB",
	}
);

StudentModel.hasOne(MbkmProgramModel, {
	sourceKey: "student_mbkm_program_id",
	foreignKey: "mbkm_program_id",
});

StudentModel.hasOne(TranskripModel, {
	sourceKey: "student_transkrip_id",
	foreignKey: "transkrip_id",
});
