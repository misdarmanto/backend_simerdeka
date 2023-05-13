import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteAttributes, ZygoteModel } from "../zygote";

export interface OrderCartAttributes extends ZygoteAttributes {
    user_id: number;
    item_id: number;
    category: string;
    items: string;
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type OrderCartCreationAttributes = Optional<OrderCartAttributes, "id" | "created_on" | "modified_on">;

// We need to declare an interface for our model that is basically what our class would be
interface OrderCartInstance extends Model<OrderCartAttributes, OrderCartCreationAttributes>, OrderCartAttributes {}

export const OrderCartModel = sequelize.define<OrderCartInstance>(
    "cart",
    {
        ...ZygoteModel,
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        item_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        items: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        ...sequelize,
        timestamps: false,
        tableName: "cart",
        deletedAt: false,
        paranoid: true,
        underscored: true,
        freezeTableName: true,
        engine: "InnoDB",
    }
);
