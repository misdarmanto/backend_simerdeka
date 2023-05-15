import moment from "moment";
import { DataTypes } from "sequelize";

export const ZygoteModel = {
	id: {
		type: DataTypes.BIGINT,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false,
	},
	created_on: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: moment().format("YYYY-MM-DD HH:mm:ss"),
	},
	modified_on: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	deleted: {
		type: DataTypes.TINYINT,
		allowNull: false,
		defaultValue: 0,
	},
};

export interface ZygoteAttributes {
	id: number;
	created_on: String;
	modified_on: String | null;
	deleted: number;
}
