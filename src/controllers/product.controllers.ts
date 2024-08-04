import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { ProductServices } from "../services/product.services";

@injectable()
export class ProductController{

    static async getAllProducts(_: Request, res:Response){
        try{
            const productService = container.resolve(ProductServices)
            const response = await productService.getAllProducts()
            if(!response){
                res.status(200).json({
                    message: "No products found",
                    status: 200
                })
            }else{
                res.status(200).json({
                    status: 200,
                    data: response,
                    message: "Products returned succesfully"
                })
            }
        }catch(error){
            if(error instanceof Error){
                res.status(500).json({
                    status: 500,
                    message: `Error in the database: ${error.message}`
                })
            }
        }
    }

    static async createProducts(req: Request, res:Response){
        try{
            const productService = container.resolve(ProductServices);
            const response = await productService.createProduct(req.body);
            if(!response){
                res.status(200).json({
                    message: "No product created",
                    status: 200
                })
            }else{
                res.status(200).json({
                    status: 200,
                    data: response,
                    message: "Products created succesfully"
                })
            }
        }catch(error){
            if(error instanceof Error){
                res.status(500).json({
                    status: 500,
                    message: `Error in the database: ${error.message}`
                })
            }
        }
    }
}