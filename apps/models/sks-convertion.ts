import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteAttributes, ZygoteModel } from "./zygote";
import { StudentModel } from "./student";
import { MbkmProgramModel } from "./mbkm-program";

export interface SksConvertionAttributes extends ZygoteAttributes {
	sks_convertion_id: string;
	sks_convertion_total: number;
	sks_convertion_student_id: string;
	sks_convertion_mbkm_program_id: string;
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type SemesterCreationAttributes = Optional<
	SksConvertionAttributes,
	"id" | "created_on" | "modified_on"
>;

// We need to declare an interface for our model that is basically what our class would be
interface SksConvertionInstance
	extends Model<SksConvertionAttributes, SemesterCreationAttributes>,
		SksConvertionAttributes {}

export const SksConvertionModel = sequelize.define<SksConvertionInstance>(
	"sks_convertion",
	{
		...ZygoteModel,
		sks_convertion_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		sks_convertion_total: {
			type: DataTypes.NUMBER,
			allowNull: false,
		},
		sks_convertion_student_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		sks_convertion_mbkm_program_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		...sequelize,
		timestamps: false,
		tableName: "sks_convertion",
		deletedAt: false,
		paranoid: true,
		underscored: true,
		freezeTableName: true,
		engine: "InnoDB",
	}
);

SksConvertionModel.hasOne(StudentModel, {
	sourceKey: "sks_convertion_student_id",
	foreignKey: "student_id",
});

SksConvertionModel.hasOne(MbkmProgramModel, {
	sourceKey: "sks_convertion_mbkm_program_id",
	foreignKey: "mbkm_program_id",
});
