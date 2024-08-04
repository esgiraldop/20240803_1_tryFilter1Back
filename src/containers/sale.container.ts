import { container } from "tsyringe";
import { SaleService } from "../services/sale.services";
import { SaleRepository } from "../repositories/sales.repository";
import { SaleController } from "../controllers/sale.controller";

container.register(SaleController, {
    useClass: SaleController
})

container.register(SaleService, {
    useClass: SaleService
})

container.register(SaleRepository, {
    useClass: SaleRepository
})