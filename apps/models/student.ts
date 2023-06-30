import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteAttributes, ZygoteModel } from "./zygote";
import { MbkmProgramModel } from "./mbkm-program";
import { TranskripModel } from "./transkrip";

export interface StudentAttributes extends ZygoteAttributes {
	studentId: string;
	studentName: string;
	studentNim: string;
	studentEmail: string;
	studentIsRegistered: boolean;
	studentDepartmentId: string;
	studentDepartmentName: string;
	studentStudyProgramId: string;
	studentStudyProgramName: string;
	studentMbkmProgramId?: string | null;
	studentTranskripId: string;
	studentSksTotal: number;
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type StudentCreationAttributes = Optional<
	StudentAttributes,
	"id" | "createdOn" | "modifiedOn"
>;

// We need to declare an interface for our model that is basically what our class would be
interface StudentInstance
	extends Model<StudentAttributes, StudentCreationAttributes>,
		StudentAttributes {}

export const StudentModel = sequelize.define<StudentInstance>(
	"student",
	{
		...ZygoteModel,
		studentId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		studentName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		studentNim: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		studentEmail: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		studentIsRegistered: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: false,
		},
		studentDepartmentId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		studentDepartmentName: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		studentStudyProgramId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		studentStudyProgramName: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		studentMbkmProgramId: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		studentTranskripId: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		studentSksTotal: {
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
	sourceKey: "studentMbkmProgramId",
	foreignKey: "mbkm_program_id",
});

StudentModel.hasMany(TranskripModel, {
	sourceKey: "studentTranskripId",
	foreignKey: "transkrip_id",
});
