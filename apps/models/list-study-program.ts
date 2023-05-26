import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteAttributes, ZygoteModel } from "./zygote";

export interface ListOfStudyProgramAttributes extends ZygoteAttributes {
	study_program_id: string;
	study_program_name: string;
	major_id: string;
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type ListOfStudyProgramCreationAttributes = Optional<
	ListOfStudyProgramAttributes,
	"id" | "created_on" | "modified_on"
>;

// We need to declare an interface for our model that is basically what our class would be
interface ListOfStudyProgramInstance
	extends Model<ListOfStudyProgramAttributes, ListOfStudyProgramCreationAttributes>,
		ListOfStudyProgramAttributes {}

export const ListOfStudyModelProgram = sequelize.define<ListOfStudyProgramInstance>(
	"list_of_study_program",
	{
		...ZygoteModel,
		study_program_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		study_program_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		major_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		...sequelize,
		timestamps: false,
		tableName: "list_of_study_program",
		deletedAt: false,
		paranoid: true,
		underscored: true,
		freezeTableName: true,
		engine: "InnoDB",
	}
);
