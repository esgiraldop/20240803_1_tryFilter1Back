import { Router } from "express";
import { ProductController } from "../controllers/product.controllers";

const ProductRoutes:Router = Router();

ProductRoutes.get('/', ProductController.getAllProducts);
ProductRoutes.post('/', ProductController.createProducts)

export default ProductRoutes;