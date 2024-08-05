import { inject, injectable } from 'tsyringe';
import { UserRepository } from '../repositories/user.repositories';
import { User } from '../models';
import { IUserData } from '../interfaces/user.interfaces';

@injectable()
export class UserService{

    constructor(
        @inject(UserRepository) private userRepository:UserRepository
    ){ }

    async getAllUser():Promise<User[]>{
        return await this.userRepository.getAll()
    }

    async getUserById(id:string):Promise<User|null>{
        return await this.userRepository.getUser(id)
    }

    async findByEmail(email:string): Promise<User | null> {
    return await this.userRepository.getUserByEmail(email);
    };

    async saveUser(userData:IUserData):Promise<IUserData|null>{
        return await this.userRepository.saveUser(userData)
    }

    async getProductsByUser(id:string):Promise<User|null>{
        return await this.userRepository.getProductsByUser(id)
    }
}