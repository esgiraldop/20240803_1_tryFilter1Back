"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const sale_services_1 = require("../services/sale.services");
const sales_repository_1 = require("../repositories/sales.repository");
const sale_controller_1 = require("../controllers/sale.controller");
tsyringe_1.container.register(sale_controller_1.SaleController, {
    useClass: sale_controller_1.SaleController
});
tsyringe_1.container.register(sale_services_1.SaleService, {
    useClass: sale_services_1.SaleService
});
tsyringe_1.container.register(sales_repository_1.SaleRepository, {
    useClass: sales_repository_1.SaleRepository
});
