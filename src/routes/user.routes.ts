import { Router } from "express";
import { UserController } from "../controllers/user.controllers";

const UserRoutes = Router();

UserRoutes.get('/users', UserController.getAllUsers)

export default UserRoutes