import { injectable } from "tsyringe";
import { User } from "../models";
import { IUserData } from "../interfaces/user.interfaces";
import { Sale } from "../models/sales.model";
import { Product } from "../models/product.model";

@injectable()
export class UserRepository{

    async getAll():Promise<User[]>{
        return await User.findAll()
    }

    async getUser(id:string):Promise<User|null>{
        return await User.findByPk(id)
    }

    async saveUser({name, email, password}:IUserData):Promise<IUserData|null>{
        try{
            console.log(`name: ${name}`)
            return await User.create({name, email, password})
        }catch(error){
            console.log("Error: ", error)
            return null
        }
    }

    async getProductsByUser(id:string):Promise<User|null>{
        return await User.findOne({
            where: {id},
            attributes: ["id", "name", "email"],
            include: [
                {
                    model: Sale,
                    as: 'sales',
                    required: true,
                    attributes: ["id"],
                    include: [
                        {
                            model: Product,
                            as: 'products',
                            required: true,
                            attributes: ["id", "name", "price"],
                        }
                    ]
                }
            ]
        });
    }
}