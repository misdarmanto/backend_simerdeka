import { Sequelize } from "sequelize";
// import * as DATABASE from "../config/databases";
import config from "../config/database-config";

// export const sequelize = new Sequelize(
// 	`mysql://${DATABASE.username}:${DATABASE.db_password}@${DATABASE.db_host}:${DATABASE.db_port}/${DATABASE.db_name}`,
// 	{
// 		logging: true,
// 	}
// );

// const env = process.env.NODE_ENV || "development";
export const sequelize = new Sequelize(config["development"]);
