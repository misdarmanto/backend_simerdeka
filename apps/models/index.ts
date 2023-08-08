import { Sequelize } from "sequelize";
import config from "../config/database-config";
export const sequelize = new Sequelize(config);
