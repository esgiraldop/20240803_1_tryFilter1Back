"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const tsyringe_1 = require("tsyringe");
const user_services_1 = require("../services/user.services");
let UserController = class UserController {
    static getAllUsers(_, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userService = tsyringe_1.container.resolve(user_services_1.UserService);
                const users = yield userService.getAllUser();
                if (!users) {
                    res.status(200).json({
                        status: 200,
                        message: "No users were found"
                    });
                }
                else {
                    res.status(200).json({
                        status: 200,
                        message: "Users retrieved successfully",
                        data: users
                    });
                }
            }
            catch (error) {
                res.status(500).json({
                    status: 500,
                    message: `Error en el servidor: ${error}`
                });
            }
        });
    }
    static getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userService = tsyringe_1.container.resolve(user_services_1.UserService);
                const user = yield userService.getUserById(req.params.id);
                if (!user) {
                    res.status(200).json({
                        status: 200,
                        message: "The user does not exist"
                    });
                }
                else {
                    res.status(200).json({
                        status: 200,
                        message: "user retrieved successfully",
                        data: user
                    });
                }
            }
            catch (error) {
                res.status(500).json({
                    status: 500,
                    message: `Error en el servidor: ${error}`
                });
            }
        });
    }
    static saveUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userService = tsyringe_1.container.resolve(user_services_1.UserService);
                const user = yield userService.saveUser(req.body);
                if (!user) {
                    res.status(200).json({
                        status: 200,
                        message: "An empty user was inserted"
                    });
                }
                else {
                    res.status(200).json({
                        status: 200,
                        message: "user inserted successfully",
                        data: user
                    });
                }
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({
                        status: 500,
                        message: error.message
                    });
                }
            }
        });
    }
    static getProductsByUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userService = tsyringe_1.container.resolve(user_services_1.UserService);
                const productsByUser = yield userService.getProductsByUser(req.params.id);
                if (!productsByUser) {
                    res.status(200).json({
                        status: 200,
                        message: "No user could be retrieved"
                    });
                }
                else {
                    res.status(200).json({
                        status: 200,
                        message: "User retrieved succesfully",
                        data: productsByUser
                    });
                }
            }
            catch (error) {
                next(error);
            }
        });
    }
};
exports.UserController = UserController;
exports.UserController = UserController = __decorate([
    (0, tsyringe_1.injectable)()
], UserController);
