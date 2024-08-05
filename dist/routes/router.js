"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = __importDefault(require("./user.routes"));
const auth_routes_1 = __importDefault(require("./auth.routes"));
const product_routes_1 = __importDefault(require("./product.routes"));
const sale_routes_1 = __importDefault(require("./sale.routes"));
const Routes = (0, express_1.Router)();
Routes.use('/users', user_routes_1.default);
Routes.use('/auth', auth_routes_1.default);
Routes.use('/products', product_routes_1.default);
Routes.use('/sales', sale_routes_1.default);
exports.default = Routes;
