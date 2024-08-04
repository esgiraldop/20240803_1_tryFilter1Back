import { Sequelize } from "sequelize-typescript";
import { User } from "../models";
import dotenv from 'dotenv';
import { Product } from "../models/product.model";
import { Sale } from "../models/sales.model";

dotenv.config();

const sequelizeConfig: Sequelize = new Sequelize({
    dialect: "mysql",
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    models: [User, Product, Sale],
});

export default sequelizeConfig;