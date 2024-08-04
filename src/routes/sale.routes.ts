import { Router } from "express";
import { SaleController } from "../controllers/sale.controller";

const SaleRoutes = Router();

SaleRoutes.post('/', SaleController.saveSale);

export default SaleRoutes;