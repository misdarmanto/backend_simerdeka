import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteAttributes, ZygoteModel } from "./zygote";

export interface ListProdiAttributes extends ZygoteAttributes {
	prodi_id: string;
	prodi_name: string;
	jurusan_id: string;
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type ListProdiCreationAttributes = Optional<
	ListProdiAttributes,
	"id" | "created_on" | "modified_on"
>;

// We need to declare an interface for our model that is basically what our class would be
interface ListProdiInstance
	extends Model<ListProdiAttributes, ListProdiCreationAttributes>,
		ListProdiAttributes {}

export const ListProdiModel = sequelize.define<ListProdiInstance>(
	"list_prodi",
	{
		...ZygoteModel,
		prodi_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		prodi_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		jurusan_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		...sequelize,
		timestamps: false,
		tableName: "list_prodi",
		deletedAt: false,
		paranoid: true,
		underscored: true,
		freezeTableName: true,
		engine: "InnoDB",
	}
);
