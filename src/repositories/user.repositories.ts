import { injectable } from "tsyringe";
import { User } from "../models";
import { IUserData } from "../interfaces/user.interfaces";

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
}