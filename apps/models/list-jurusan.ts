import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteAttributes, ZygoteModel } from "./zygote";
import { ListProdiModel } from "./list-prodi";

export interface ListJurusanAttributes extends ZygoteAttributes {
	jurusan_id: string;
	jurusan_name: string;
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type ListJurusanCreationAttributes = Optional<
	ListJurusanAttributes,
	"id" | "created_on" | "modified_on"
>;

// We need to declare an interface for our model that is basically what our class would be
interface ListJurusanInstance
	extends Model<ListJurusanAttributes, ListJurusanCreationAttributes>,
		ListJurusanAttributes {}

export const ListJurusanModel = sequelize.define<ListJurusanInstance>(
	"list_jurusan",
	{
		...ZygoteModel,
		jurusan_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		jurusan_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		...sequelize,
		timestamps: false,
		tableName: "list_jurusan",
		deletedAt: false,
		paranoid: true,
		underscored: true,
		freezeTableName: true,
		engine: "InnoDB",
	}
);

ListJurusanModel.hasMany(ListProdiModel, {
	sourceKey: "jurusan_id",
	foreignKey: "jurusan_id",
});
