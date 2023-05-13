import { Sequelize } from "sequelize";
import { DATABASE } from "../../../config/databases";
export const sequelize = new Sequelize(
	`mysql://${DATABASE.db_username}:${DATABASE.db_password}@${DATABASE.db_host}:${DATABASE.db_port}/${DATABASE.db_name}`,
	{
		logging: DATABASE.db_log,
	}
);
