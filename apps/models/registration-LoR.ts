import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteAttributes, ZygoteModel } from "./zygote";

export interface RegistrationLoRAttributes extends ZygoteAttributes {
	registration_lor_id: string;
	user_id: string;
	student_id: string;
	student_name: string;
	student_nim: string;
	student_transkrip: string;
	dosen_wali: string;
	surat_persetujuan_dosen_wali: string;
	program_name: string;
	program_correlation_description: string;
	registration_status: "waiting" | "process" | "accepted" | "rejected";
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type RegistrationLoRCreationAttributes = Optional<
	RegistrationLoRAttributes,
	"id" | "created_on" | "modified_on"
>;

// We need to declare an interface for our model that is basically what our class would be
interface RegistrationLoRInstance
	extends Model<RegistrationLoRAttributes, RegistrationLoRCreationAttributes>,
		RegistrationLoRAttributes {}

export const RegistrationLoRModel = sequelize.define<RegistrationLoRInstance>(
	"registration_LoR",
	{
		...ZygoteModel,
		registration_lor_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		user_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		student_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		student_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		student_nim: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		student_transkrip: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		dosen_wali: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		surat_persetujuan_dosen_wali: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		program_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		program_correlation_description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		registration_status: {
			type: DataTypes.ENUM("waiting", "process", "accepted", "rejected"),
			allowNull: true,
			defaultValue: "waiting",
		},
	},
	{
		...sequelize,
		timestamps: false,
		tableName: "registration_LoR",
		deletedAt: false,
		paranoid: true,
		underscored: true,
		freezeTableName: true,
		engine: "InnoDB",
	}
);
