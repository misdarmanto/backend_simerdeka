import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteAttributes, ZygoteModel } from "./zygote";
import { SemesterModel } from "./semester";
import { ListOfMajorModel } from "./list-of-major";

export interface AcademicProgramAttributes extends ZygoteAttributes {
	academic_program_id: string;
	academic_program_created_by: string;
	academic_program_name: string;
	academic_program_type: string;
	major_id: string;
	semester_id: string;
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type AcademicProgramCreationAttributes = Optional<
	AcademicProgramAttributes,
	"id" | "created_on" | "modified_on"
>;

// We need to declare an interface for our model that is basically what our class would be
interface AcademicProgramInstance
	extends Model<AcademicProgramAttributes, AcademicProgramCreationAttributes>,
		AcademicProgramAttributes {}

export const AcademicProgramModel = sequelize.define<AcademicProgramInstance>(
	"academic_program",
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
		tableName: "academic_program",
		deletedAt: false,
		paranoid: true,
		underscored: true,
		freezeTableName: true,
		engine: "InnoDB",
	}
);

AcademicProgramModel.hasOne(SemesterModel, {
	sourceKey: "semester_id",
	foreignKey: "semester_id",
});

AcademicProgramModel.hasOne(ListOfMajorModel, {
	sourceKey: "major_id",
	foreignKey: "major_id",
});
