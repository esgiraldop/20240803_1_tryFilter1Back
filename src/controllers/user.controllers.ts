import { injectable, container } from "tsyringe";
import { Request, Response } from "express";
import { User } from "../models";
import { UserService } from "../services/user.services";

@injectable()
export class UserController {

    static async getAllUsers(_: Request, res: Response): Promise<void> {
        try {
            const userService = container.resolve(UserService);
            const users = await userService.getAllUser();
            if (!users) {
                res.status(200).json({
                    status: 200,
                    message: "No users were found"
                });
            }else{
                res.status(200).json({
                    status: 200,
                    message: "Users retrieved successfully",
                    data: users
                });
            }
        }
        catch (error) {
            res.status(500).json({
                status: 500,
                message: `Error en el servidor: ${error}`
            });
        }
    }

    static async getUserById(req: Request, res: Response): Promise<void> {
        try {
            const userService = container.resolve(UserService);
            const user = await userService.getUserById(req.params.id)
            if (!user) {
                res.status(200).json({
                    status: 200,
                    message: "The user does not exist"
                })
            }else{
                res.status(200).json({
                    status: 200,
                    message: "user retrieved successfully",
                    data: user
                }
                )
            }
        }
        catch (error) {
            res.status(500).json({
                status: 500,
                message: `Error en el servidor: ${error}`
            })
        }
    }

    static async saveUser(req:Request, res:Response):Promise<void>{
        try{
            const userService = container.resolve(UserService);
            const user = await userService.saveUser(req.body);
            if (!user) {
                res.status(200).json({
                    status: 200,
                    message: "An empty user was inserted"
                })
            }else{
                res.status(200).json({
                    status: 200,
                    message: "user inserted successfully",
                    data: user
                }
                )
            }
        }catch(error){
            if(error instanceof Error){
                res.status(500).json({
                status: 500,
                message: error.message
            })
            }
        }
    }

    static async getProductsByUser(req:Request, res:Response):Promise<any>{
        try{
            const userService = container.resolve(UserService);
            const productsByUser = await userService.getProductsByUser(req.params.id);
            if (!productsByUser) {
                res.status(200).json({
                    status: 200,
                    message: "No user could be retrieved"
                })
            }else{
                res.status(200).json({
                    status: 200,
                    message: "User retrieved succesfully",
                    data: productsByUser
                }
                )
            }
        }catch(error){
            if(error instanceof Error){
                res.status(500).json({
                status: 500,
                message: error.message
            })
            }
        }
    }
}