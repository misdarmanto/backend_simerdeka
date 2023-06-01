import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteAttributes, ZygoteModel } from "./zygote";
import { StudentModel } from "./student";

export interface RecomendationLetterAttributes extends ZygoteAttributes {
	recomendation_letter_id: string;
	recomendation_letter_student_transkrip: string;
	recomendation_letter_dosen_wali: string;
	recomendation_letter_approval_letter: string;
	recomendation_letter_from_study_program: string;
	recomendation_letter_from_department: string;
	recomendation_letter_from_lp3m: string;
	recomendation_letter_from_academic: string;
	recomendation_letter_program_name: string;
	recomendation_letter_program_correlation: string;
	recomendation_letter_status: "waiting" | "accepted" | "rejected";
	recomendation_letter_status_message: string;
	recomendation_letter_assign_to_student: boolean;
	recomendation_letter_assign_to_study_program: boolean;
	recomendation_letter_assign_to_department: boolean;
	recomendation_letter_assign_to_lp3m: boolean;
	recomendation_letter_assign_to_academic: boolean;
	recomendation_letter_study_program_id: string;
	recomendation_letter_department_id: string;
	recomendation_letter_student_id: string;
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type RecomendationLetterCreationAttributes = Optional<
	RecomendationLetterAttributes,
	"id" | "created_on" | "modified_on"
>;

// We need to declare an interface for our model that is basically what our class would be
interface RecomendationLetterInstance
	extends Model<RecomendationLetterAttributes, RecomendationLetterCreationAttributes>,
		RecomendationLetterAttributes {}

export const RecomendationLetterModel = sequelize.define<RecomendationLetterInstance>(
	"recomendation_letter",
	{
		...ZygoteModel,
		recomendation_letter_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		recomendation_letter_student_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		recomendation_letter_department_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		recomendation_letter_study_program_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		recomendation_letter_student_transkrip: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		recomendation_letter_dosen_wali: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		recomendation_letter_approval_letter: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		recomendation_letter_from_study_program: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		recomendation_letter_from_department: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		recomendation_letter_from_lp3m: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		recomendation_letter_from_academic: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		recomendation_letter_program_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		recomendation_letter_program_correlation: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		recomendation_letter_status: {
			type: DataTypes.ENUM("waiting", "accepted", "rejected"),
			allowNull: true,
			defaultValue: "waiting",
		},
		recomendation_letter_status_message: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		recomendation_letter_assign_to_student: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: false,
		},
		recomendation_letter_assign_to_study_program: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: false,
		},
		recomendation_letter_assign_to_department: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: false,
		},
		recomendation_letter_assign_to_lp3m: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: false,
		},
		recomendation_letter_assign_to_academic: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: false,
		},
	},
	{
		...sequelize,
		timestamps: false,
		tableName: "recomendation_letter",
		deletedAt: false,
		paranoid: true,
		underscored: true,
		freezeTableName: true,
		engine: "InnoDB",
	}
);

RecomendationLetterModel.hasOne(StudentModel, {
	sourceKey: "recomendation_letter_student_id",
	foreignKey: "student_id",
});
