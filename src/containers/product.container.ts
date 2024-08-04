import { container } from "tsyringe";
import { ProductController } from "../controllers/product.controllers";
import { ProductServices } from "../services/product.services";
import { ProductRepository } from "../repositories/product.repositories";


container.register(ProductController, {
    useClass: ProductController
})

container.register(ProductServices, {
    useClass: ProductServices
})

container.register(ProductRepository, {
    useClass: ProductRepository
})