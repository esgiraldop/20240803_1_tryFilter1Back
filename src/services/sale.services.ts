import { inject, injectable } from "tsyringe";
import { SaleRepository } from "../repositories/sales.repository";
import { ISale } from "../interfaces/sales.interface";
import { Sale } from "../models/sales.model";

@injectable()
export class SaleService{

    constructor(@inject(SaleRepository) private saleRepository:SaleRepository){

    }

    async saveSale(saleData:ISale):Promise<Sale|null>{
        return this.saleRepository.saveSale(saleData)
    }

}