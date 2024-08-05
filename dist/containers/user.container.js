"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const user_controllers_1 = require("../controllers/user.controllers");
const user_services_1 = require("../services/user.services");
const user_repositories_1 = require("../repositories/user.repositories");
tsyringe_1.container.register(user_controllers_1.UserController, {
    useClass: user_controllers_1.UserController
});
tsyringe_1.container.register(user_services_1.UserService, {
    useClass: user_services_1.UserService
});
tsyringe_1.container.register(user_repositories_1.UserRepository, {
    useClass: user_repositories_1.UserRepository
});
