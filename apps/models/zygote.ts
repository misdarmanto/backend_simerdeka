import moment from "moment";
import { DataTypes } from "sequelize";

export const ZygoteModel = {
	id: {
		type: DataTypes.BIGINT,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false,
	},
	createdOn: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: moment().format("YYYY-MM-DD HH:mm:ss"),
	},
	modifiedOn: {
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
	createdOn: String;
	modifiedOn: String | null;
	deleted: number;
}
