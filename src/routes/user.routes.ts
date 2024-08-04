import { Router } from "express";
import { UserController } from "../controllers/user.controllers";

const UserRoutes = Router();

UserRoutes.get('/', UserController.getAllUsers);
UserRoutes.get('/:id', UserController.getUserById);
UserRoutes.post('/', UserController.saveUser);
UserRoutes.post('/login')

export default UserRoutes;