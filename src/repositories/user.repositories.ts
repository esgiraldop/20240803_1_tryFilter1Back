import { injectable } from "tsyringe";
import { User } from "../models";


@injectable()
export class UserRepository{

    async getAll():Promise<User[]>{
        return User.findAll()
    }
}