import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteAttributes, ZygoteModel } from "./zygote";
import { StudentModel } from "./student";
import { MbkmProgramModel } from "./mbkm-program";

export interface MbkmLogBookAttributes extends ZygoteAttributes {
	mbkm_log_book_id: string;
	mbkm_log_book_week: number;
	mbkm_log_book_student_id: string;
	mbkm_log_book_file: string;
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type MbkmLogBookCreationAttributes = Optional<
	MbkmLogBookAttributes,
	"id" | "created_on" | "modified_on"
>;

// We need to declare an interface for our model that is basically what our class would be
interface MbkmLogBookInstance
	extends Model<MbkmLogBookAttributes, MbkmLogBookCreationAttributes>,
		MbkmLogBookAttributes {}

export const MbkmLogBookModel = sequelize.define<MbkmLogBookInstance>(
	"mbkm_log_book",
	{
		...ZygoteModel,
		mbkm_log_book_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		mbkm_log_book_week: {
			type: DataTypes.NUMBER,
			allowNull: false,
		},
		mbkm_log_book_student_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		mbkm_log_book_file: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		...sequelize,
		timestamps: false,
		tableName: "mbkm_log_book",
		deletedAt: false,
		paranoid: true,
		underscored: true,
		freezeTableName: true,
		engine: "InnoDB",
	}
);

MbkmLogBookModel.hasOne(StudentModel, {
	sourceKey: "mbkm_log_book_student_id",
	foreignKey: "student_id",
});
