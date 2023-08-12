import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteAttributes, ZygoteModel } from "./zygote";
import { MataKuliahModel } from "./matkul";

export interface SksConvertionStudentAttributes extends ZygoteAttributes {
	sksConvertionStudentId: string;
	sksConvertionStudentStudentId: string;
	sksConvertionStudentSksConvertionId: string;
	sksConvertionStudentSksConvertionSchemaId: string;
	sksConvertionStudentMatkulId: string;
	sksConvertionStudentStudyProgramId: string;
	sksConvertionStudentMbkmProgramId: string;
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type SksConvertionStudentCreationAttributes = Optional<
	SksConvertionStudentAttributes,
	"id" | "createdOn" | "modifiedOn"
>;

// We need to declare an interface for our model that is basically what our class would be
interface SksConvertionStudentInstance
	extends Model<SksConvertionStudentAttributes, SksConvertionStudentCreationAttributes>,
		SksConvertionStudentAttributes {}

export const SksConvertionStudentModel = sequelize.define<SksConvertionStudentInstance>(
	"sks_convertion_student",
	{
		...ZygoteModel,
		sksConvertionStudentId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		sksConvertionStudentStudentId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		sksConvertionStudentSksConvertionId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		sksConvertionStudentSksConvertionSchemaId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		sksConvertionStudentMatkulId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		sksConvertionStudentStudyProgramId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		sksConvertionStudentMbkmProgramId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		...sequelize,
		timestamps: false,
		tableName: "sks_convertion_student",
		deletedAt: false,
		paranoid: true,
		underscored: true,
		freezeTableName: true,
		engine: "InnoDB",
	}
);

// SksConvertionStudentModel.hasMany(MataKuliahModel, {
// 	as: "mataKuliah",
// 	sourceKey: "sksConvertionStudentMatkulId",
// 	foreignKey: "mataKuliahId",
// });
