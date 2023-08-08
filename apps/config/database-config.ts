import dotenv from "dotenv";
dotenv.config();

import { Options } from "sequelize";
const development: Options = {
	username: process.env.DB_USER_NAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	host: process.env.DB_HOST,
	dialect: "mysql",
	logging: false,
};

const test: Options = {
	username: process.env.DB_USER_NAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	host: process.env.DB_HOST,
	dialect: "mysql",
	logging: false,
};

const production: Options = {
	username: process.env.DB_USER_NAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	host: process.env.DB_HOST,
	dialect: "mysql",
	logging: false,
};

const config: "development" | "production" | "test" | any = {
	development,
	production,
	test,
};

export default config[process.env.APP_STAGE || "development"];
