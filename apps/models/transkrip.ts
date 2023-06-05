import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteAttributes, ZygoteModel } from "./zygote";
import { StudentModel } from "./student";
import { MataKuliahModel } from "./matkul";

export interface TranskripAttributes extends ZygoteAttributes {
	transkripId: string;
	transkripStudentId: string;
	transkripMataKuliahId: string;
	transkripStudyProgramId: string;
	transkripDepartmentId: string;
	transkripMataKuliahGrade: string;
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type TranskripCreationAttributes = Optional<
	TranskripAttributes,
	"id" | "created_on" | "modified_on"
>;

// We need to declare an interface for our model that is basically what our class would be
interface TranskripInstance
	extends Model<TranskripAttributes, TranskripCreationAttributes>,
		TranskripAttributes {}

export const TranskripModel = sequelize.define<TranskripInstance>(
	"transkrip",
	{
		...ZygoteModel,
		transkripId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		transkripStudentId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		transkripMataKuliahId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		transkripStudyProgramId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		transkripDepartmentId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		transkripMataKuliahGrade: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		...sequelize,
		timestamps: false,
		tableName: "transkrip",
		deletedAt: false,
		paranoid: true,
		underscored: true,
		freezeTableName: true,
		engine: "InnoDB",
	}
);

// TranskripModel.hasOne(StudentModel, {
// 	sourceKey: "transkrip_student_id",
// 	foreignKey: "student_id",
// });

TranskripModel.hasOne(MataKuliahModel, {
	sourceKey: "transkripMataKuliahId",
	foreignKey: "mata_kuliah_id",
});
