"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controllers_1 = require("../controllers/product.controllers");
const ProductRoutes = (0, express_1.Router)();
ProductRoutes.get('/', product_controllers_1.ProductController.getAllProducts);
ProductRoutes.post('/', product_controllers_1.ProductController.createProducts);
exports.default = ProductRoutes;
