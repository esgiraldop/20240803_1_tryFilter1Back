"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const models_1 = require("../models");
const dotenv_1 = __importDefault(require("dotenv"));
const product_model_1 = require("../models/product.model");
const sales_model_1 = require("../models/sales.model");
dotenv_1.default.config();
const sequelizeConfig = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    models: [models_1.User, product_model_1.Product, sales_model_1.Sale],
});
exports.default = sequelizeConfig;
