import { container, injectable } from "tsyringe";
import { SaleService } from "../services/sale.services";
import { Request, Response, NextFunction } from "express";

@injectable()
export class SaleController{

    static async saveSale(req:Request, res:Response, next:NextFunction):Promise<void>{
        try{
            const saleService = container.resolve(SaleService);
            const sale = await saleService.saveSale(req.body);
            if (!sale) {
                res.status(200).json({
                    status: 200,
                    message: "No sale was saved"
                });
            }else{
                res.status(201).json({
                    status: 201,
                    message: "Sale saved successfully",
                    data: sale
                });
            }
        }catch(error){
            next(error)
        }
    }
}