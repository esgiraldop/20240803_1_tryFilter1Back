import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";

const AuthRoutes = Router();

AuthRoutes.post('/', AuthController.login);

export default AuthRoutes;