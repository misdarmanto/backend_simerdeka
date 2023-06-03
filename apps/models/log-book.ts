import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteAttributes, ZygoteModel } from "./zygote";

export interface LogBookAttributes extends ZygoteAttributes {
	log_book_id: string;
	log_book_report_file: string;
	log_book_report_week: number;
	log_book_student_id: string;
	log_book_student_name: string;
	log_book_student_nim: string;
	log_book_study_program_id: string;
	log_book_study_program_name: string;
	log_book_department_id: string;
	log_book_department_name: string;
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type LogBookCreationAttributes = Optional<
	LogBookAttributes,
	"id" | "created_on" | "modified_on"
>;

// We need to declare an interface for our model that is basically what our class would be
interface LogBookInstance
	extends Model<LogBookAttributes, LogBookCreationAttributes>,
		LogBookAttributes {}

export const LogBookModel = sequelize.define<LogBookInstance>(
	"log_book",
	{
		...ZygoteModel,
		log_book_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		log_book_report_file: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		log_book_report_week: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		log_book_student_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		log_book_student_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		log_book_student_nim: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		log_book_study_program_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		log_book_study_program_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		log_book_department_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		log_book_department_name: {
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
