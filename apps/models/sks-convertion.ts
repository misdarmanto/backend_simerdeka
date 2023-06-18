import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteAttributes, ZygoteModel } from "./zygote";
import { StudentModel } from "./student";
import { MbkmProgramModel } from "./mbkm-program";

export interface SksConvertionAttributes extends ZygoteAttributes {
	sksConvertionId: string;
	sksConvertionTotal: number;
	sksConvertionStudentId: string;
	sksConvertionMbkmProgramId: string;
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type SemesterCreationAttributes = Optional<
	SksConvertionAttributes,
	"id" | "createdOn" | "modifiedOn"
>;

// We need to declare an interface for our model that is basically what our class would be
interface SksConvertionInstance
	extends Model<SksConvertionAttributes, SemesterCreationAttributes>,
		SksConvertionAttributes {}

export const SksConvertionModel = sequelize.define<SksConvertionInstance>(
	"sksConvertion",
	{
		...ZygoteModel,
		sksConvertionId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		sksConvertionTotal: {
			type: DataTypes.NUMBER,
			allowNull: false,
		},
		sksConvertionStudentId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		sksConvertionMbkmProgramId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		...sequelize,
		timestamps: false,
		tableName: "sksConvertion",
		deletedAt: false,
		paranoid: true,
		underscored: true,
		freezeTableName: true,
		engine: "InnoDB",
	}
);

SksConvertionModel.hasOne(StudentModel, {
	sourceKey: "sksConvertionStudentId",
	foreignKey: "student_id",
});

SksConvertionModel.hasOne(MbkmProgramModel, {
	sourceKey: "sksConvertionMbkmProgramId",
	foreignKey: "mbkm_program_id",
});
