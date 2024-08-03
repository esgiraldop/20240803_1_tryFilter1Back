import { injectable, container } from "tsyringe";
import { Request, Response } from "express";
import { User } from "../models";
import { UserService } from "../services/user.services";

@injectable()
export class UserController{

    static async getAllUsers(req:Request, res:Response):Promise<void>{
        try{
            const userService = container.resolve(UserService);
            const users = await userService.getAllUser();
            if(!users){
                res.status(200).json({
                    status:200,
                    message:"No users were found"
                })
            }
            res.status(200).json({
                status: 200,
                message: "Users retrieved successfully",
                data: users
            })
        }
        catch(error){
            res.status(500).json({
                message: `Error en el servidor: ${error}`
            })
        }
    }
}