import dotenv from "dotenv";
dotenv.config();

export const CONFIG = {
	app_version: process.env.APP_VERSION || "1.0.0",
	app_semantic: process.env.APP_SEMANTIC || "0",
	env: process.env.APP_ENV || "development",
	port: process.env.APP_PORT ?? 8000,
	log: process.env.LOG == "true",
	secret: {
		key_encryption: process.env.SECRET_KEY_ENCRYPTION,
		password_encryption: process.env.SECRET_PASSWORD_ENCRYPTION,
		pin_encryption: process.env.SECRET_PIN_ENCRYPTION,
		token: process.env.TOKEN_SECRET || "",
	},
	authorization: {
		username: process.env.AUTHORIZATION_USERNAME,
		passsword: process.env.AUTHORIZATION_PASSWORD,
	},
	MAX_FILE_SIZE: process.env.MAX_FILE_SIZE || 2048,
};
