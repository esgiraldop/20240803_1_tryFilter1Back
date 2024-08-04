import { container, injectable } from "tsyringe";
import { SaleService } from "../services/sale.services";
import { Request, Response } from "express";

@injectable()
export class SaleController{

    static async saveSale(req:Request, res:Response):Promise<void>{
        try{
            const saleService = container.resolve(SaleService);
            const sale = await saleService.saveSale(req.body);
            console.log("SALE: ", sale)
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
            res.status(500).json({
                status: 500,
                message: `Error en el servidor: ${error}`
            });
        }
    }
}