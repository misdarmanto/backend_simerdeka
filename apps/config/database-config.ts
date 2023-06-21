import dotenv from "dotenv";
dotenv.config();

// export const DATABASE = {
// 	db_name: process.env.DB_NAME || "simerdeka",
// 	db_host: process.env.DB_HOST || "127.0.0.1",
// 	db_port: process.env.DB_PORT || 3306,
// 	db_username: process.env.DB_USERNAME || "root",
// 	db_password: process.env.DB_PASSWORD || "toor",
// 	db_log: process.env.DB_LOG == "false",
// };

import { Options } from "sequelize";

const development: Options = {
	username: "root",
	password: "toor",
	database: "simerdeka",
	host: "localhost",
	dialect: "mysql",
	logging: false,
};

const test: Options = {
	username: "root",
	password: "toor",
	database: "simerdeka",
	host: "localhost",
	dialect: "mysql",
	logging: false,
};

const production: Options = {
	username: "root",
	password: "toor",
	database: "simerdeka",
	host: "localhost",
	dialect: "mysql",
	logging: false,
};

const config = {
	development,
	production,
	test,
};

export default config;
