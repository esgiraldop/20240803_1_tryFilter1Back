import { container } from "tsyringe";
import { SaleService } from "../services/sale.services";
import { SaleRepository } from "../repositories/sales.repositories";
import { SaleController } from "../controllers/sale.controllers";

container.register(SaleController, {
    useClass: SaleController
})

container.register(SaleService, {
    useClass: SaleService
})

container.register(SaleRepository, {
    useClass: SaleRepository
})