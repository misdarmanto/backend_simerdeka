import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteAttributes, ZygoteModel } from "./zygote";
import { SemesterModel } from "./semester";
import { ListOfMajorModel } from "./list-of-major";

export interface ProgramForStudentAttributes extends ZygoteAttributes {
	academic_program_id: string;
	academic_program_created_by: string;
	academic_program_name: string;
	academic_program_type: string;
	major_id: string;
	semester_id: string;
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type ProgramForStudentCreationAttributes = Optional<
	ProgramForStudentAttributes,
	"id" | "created_on" | "modified_on"
>;

// We need to declare an interface for our model that is basically what our class would be
interface ProgramForStudentInstance
	extends Model<ProgramForStudentAttributes, ProgramForStudentCreationAttributes>,
		ProgramForStudentAttributes {}

export const ProgramForStudentModel = sequelize.define<ProgramForStudentInstance>(
	"program_for_student",
	{
		...ZygoteModel,
		academic_program_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		academic_program_created_by: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		academic_program_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		academic_program_type: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		major_id: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		semester_id: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		...sequelize,
		timestamps: false,
		tableName: "program_for_student",
		deletedAt: false,
		paranoid: true,
		underscored: true,
		freezeTableName: true,
		engine: "InnoDB",
	}
);

ProgramForStudentModel.hasOne(SemesterModel, {
	sourceKey: "semester_id",
	foreignKey: "semester_id",
});

ProgramForStudentModel.hasOne(ListOfMajorModel, {
	sourceKey: "major_id",
	foreignKey: "major_id",
});
