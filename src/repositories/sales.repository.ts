import { injectable } from "tsyringe";
import { ISale } from "../interfaces/sales.interface";
import { Sale } from "../models/sales.model";

@injectable()
export class SaleRepository {

    async saveSale({
        productID,
        userID,
        description
    }: ISale): Promise<Sale | null> {
        return await Sale.create({
            productID,
            userID,
            description
        })
    }
}