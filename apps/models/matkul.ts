import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteAttributes, ZygoteModel } from "./zygote";

export interface MataKuliahAttributes extends ZygoteAttributes {
	mataKuliahId: string;
	mataKuliahName: string;
	mataKuliahStudyProgramId: string;
	mataKuliahStudyProgramName: string;
	mataKuliahDepartmentId: string;
	mataKuliahDepartmentName: string;
	mataKuliahSksTotal: number;
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type MataKuliahCreationAttributes = Optional<
	MataKuliahAttributes,
	"id" | "createdOn" | "modifiedOn"
>;

// We need to declare an interface for our model that is basically what our class would be
interface MataKuliahInstance
	extends Model<MataKuliahAttributes, MataKuliahCreationAttributes>,
		MataKuliahAttributes {}

export const MataKuliahModel = sequelize.define<MataKuliahInstance>(
	"mata_kuliah",
	{
		...ZygoteModel,
		mataKuliahId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		mataKuliahName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		mataKuliahStudyProgramId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		mataKuliahStudyProgramName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		mataKuliahDepartmentId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		mataKuliahDepartmentName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		mataKuliahSksTotal: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 0,
		},
	},
	{
		...sequelize,
		timestamps: false,
		tableName: "mata_kuliah",
		deletedAt: false,
		paranoid: true,
		underscored: true,
		freezeTableName: true,
		engine: "InnoDB",
	}
);
