"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sale_controller_1 = require("../controllers/sale.controller");
const SaleRoutes = (0, express_1.Router)();
SaleRoutes.post('/', sale_controller_1.SaleController.saveSale);
exports.default = SaleRoutes;
