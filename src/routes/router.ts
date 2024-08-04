import { Router } from "express";
import UserRoutes from "./user.routes";
import AuthRoutes from "./auth.routes";
import productRoutes from "./product.routes";
import SaleRoutes from "./sale.routes";

const Routes = Router()

Routes.use('/users', UserRoutes);
Routes.use('/auth', AuthRoutes);
Routes.use('/products', productRoutes);
Routes.use('/sales', SaleRoutes)

export default Routes