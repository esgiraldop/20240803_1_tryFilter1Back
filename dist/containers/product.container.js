"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const product_controllers_1 = require("../controllers/product.controllers");
const product_services_1 = require("../services/product.services");
const product_repositories_1 = require("../repositories/product.repositories");
tsyringe_1.container.register(product_controllers_1.ProductController, {
    useClass: product_controllers_1.ProductController
});
tsyringe_1.container.register(product_services_1.ProductServices, {
    useClass: product_services_1.ProductServices
});
tsyringe_1.container.register(product_repositories_1.ProductRepository, {
    useClass: product_repositories_1.ProductRepository
});
