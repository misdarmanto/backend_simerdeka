import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteAttributes, ZygoteModel } from "./zygote";

export interface MbkmProgramParticipationAttributes extends ZygoteAttributes {
	mbkm_program_participation_id: string;
	mbkm_program_participation_program_id: string;
	mbkm_program_participation_name: string;
	mbkm_program_participation_study_program_id: string;
	mbkm_program_participation_department_id: string;
	mbkm_program_participation_semester_id: string;
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type MbkmProgramParticipationCreationAttributes = Optional<
	MbkmProgramParticipationAttributes,
	"id" | "created_on" | "modified_on"
>;

// We need to declare an interface for our model that is basically what our class would be
interface MbkmProgramParticipationInstance
	extends Model<
			MbkmProgramParticipationAttributes,
			MbkmProgramParticipationCreationAttributes
		>,
		MbkmProgramParticipationAttributes {}

export const MbkmProgramParticipationModel =
	sequelize.define<MbkmProgramParticipationInstance>(
		"mbkm_program_participation",
		{
			...ZygoteModel,
			mbkm_program_participation_id: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			mbkm_program_participation_program_id: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			mbkm_program_participation_name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			mbkm_program_participation_study_program_id: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			mbkm_program_participation_department_id: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			mbkm_program_participation_semester_id: {
				type: DataTypes.STRING,
				allowNull: true,
			},
		},
		{
			...sequelize,
			timestamps: false,
			tableName: "mbkm_program_participation",
			deletedAt: false,
			paranoid: true,
			underscored: true,
			freezeTableName: true,
			engine: "InnoDB",
		}
	);
