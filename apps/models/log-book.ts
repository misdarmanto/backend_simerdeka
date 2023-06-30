import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteAttributes, ZygoteModel } from "./zygote";

export interface LogBookAttributes extends ZygoteAttributes {
	logBookId: string;
	logBookReportFile: string;
	logBookReportWeek: number;
	logBookStudentId: string;
	logBookStudentName: string;
	logBookStudentNim: string;
	logBookStudyProgramId: string;
	logBookStudyProgramName: string;
	logBookDepartmentId: string;
	logBookDepartmentName: string;
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type LogBookCreationAttributes = Optional<
	LogBookAttributes,
	"id" | "createdOn" | "modifiedOn"
>;

// We need to declare an interface for our model that is basically what our class would be
interface LogBookInstance
	extends Model<LogBookAttributes, LogBookCreationAttributes>,
		LogBookAttributes {}

export const LogBookModel = sequelize.define<LogBookInstance>(
	"log_book",
	{
		...ZygoteModel,
		logBookId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		logBookReportFile: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		logBookReportWeek: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		logBookStudentId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		logBookStudentName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		logBookStudentNim: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		logBookStudyProgramId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		logBookStudyProgramName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		logBookDepartmentId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		logBookDepartmentName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		...sequelize,
		timestamps: false,
		tableName: "log_book",
		deletedAt: false,
		paranoid: true,
		underscored: true,
		freezeTableName: true,
		engine: "InnoDB",
	}
);
