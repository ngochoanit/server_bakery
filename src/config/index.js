import * as dotenv from "dotenv";

dotenv.config();
export const port = process.env.PORT || 6868;
export const host = process.env.HOST || "localhost";
export const node_env = process.env.NODE_ENV || "development";
export const databasePort = process.env.DATABASE_PORT || ":8080";
export const userName = process.env.USER || "root";
export const password = process.env.PASSWORD || null;
export const database = process.env.DATABASE || "mysql";
export const jwtSecret = process.env.JWT_SECRET || "pnh.it";
export const accessTokenLife = process.env.ACCESS_TOKEN_LIFE || "1h";
export const refreshTokenLife = process.env.REFRESH_TOKEN_LIFE || "30d";
