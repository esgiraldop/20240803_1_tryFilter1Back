import { inject, injectable } from 'tsyringe';
import { UserRepository } from '../repositories/user.repositories';
import { User } from '../models';
import { IUserData } from '../interfaces/user.interfaces';

@injectable()
export class UserService{

    constructor(
        @inject(UserRepository) private UserRepository:UserRepository
    ){ }

    async getAllUser():Promise<User[]>{
        return this.UserRepository.getAll()
    }

    async getUserById(id:string):Promise<User|null>{
        return this.UserRepository.getUser(id)
    }

    async saveUser(userData:IUserData):Promise<IUserData|null>{
        return this.UserRepository.saveUser(userData)
    }
}