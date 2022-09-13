import * as dotenv from 'dotenv';

dotenv.config();
export const port = process.env.PORT|| 8080;
export const host = process.env.HOST|| 'localhost';
export const useName = process.env.PORT|| 'root';
export const password = process.env.PASSWORD|| '';
export const database = process.env.DATABASE|| 'mysql'
