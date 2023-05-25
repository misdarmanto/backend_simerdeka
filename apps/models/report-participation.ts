import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteAttributes, ZygoteModel } from "./zygote";
import { ListOfStudyModel } from "./list-study-program";

export interface ReportParticipationAttributes extends ZygoteAttributes {
	study_program_id: string;
	major_id: string;
	student_id: string;
	report_participation_id: string;
	report_participation_letter: string;
	report_participation_status: "waiting" | "accepted" | "rejected";
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type ReportParticipationCreationAttributes = Optional<
	ReportParticipationAttributes,
	"id" | "created_on" | "modified_on"
>;

// We need to declare an interface for our model that is basically what our class would be
interface ReportParticipationInstance
	extends Model<ReportParticipationAttributes, ReportParticipationCreationAttributes>,
		ReportParticipationAttributes {}

export const ReportParticipationModel = sequelize.define<ReportParticipationInstance>(
	"report_participation",
	{
		...ZygoteModel,
		report_participation_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		report_participation_letter: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		report_participation_status: {
			type: DataTypes.ENUM("waiting", "accepted", "rejected"),
			allowNull: true,
			defaultValue: "waiting",
		},
		student_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		major_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		study_program_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		...sequelize,
		timestamps: false,
		tableName: "report_participation",
		deletedAt: false,
		paranoid: true,
		underscored: true,
		freezeTableName: true,
		engine: "InnoDB",
	}
);

ReportParticipationModel.hasMany(ListOfStudyModel, {
	sourceKey: "student_id",
	foreignKey: "student_id",
});
