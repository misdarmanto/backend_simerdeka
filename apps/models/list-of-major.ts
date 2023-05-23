import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteAttributes, ZygoteModel } from "./zygote";
import { ListOfStudyModel } from "./list-study-program";

export interface ListOfMajorAttributes extends ZygoteAttributes {
	major_id: string;
	major_name: string;
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type ListOfMajorCreationAttributes = Optional<
	ListOfMajorAttributes,
	"id" | "created_on" | "modified_on"
>;

// We need to declare an interface for our model that is basically what our class would be
interface ListOfMajorInstance
	extends Model<ListOfMajorAttributes, ListOfMajorCreationAttributes>,
		ListOfMajorAttributes {}

export const ListOfMajorModel = sequelize.define<ListOfMajorInstance>(
	"list_of_major",
	{
		...ZygoteModel,
		major_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		major_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		...sequelize,
		timestamps: false,
		tableName: "list_of_major",
		deletedAt: false,
		paranoid: true,
		underscored: true,
		freezeTableName: true,
		engine: "InnoDB",
	}
);

ListOfMajorModel.hasMany(ListOfStudyModel, {
	sourceKey: "major_id",
	foreignKey: "major_id",
});
