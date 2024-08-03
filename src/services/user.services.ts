import { inject, injectable } from 'tsyringe';
import { UserRepository } from '../repositories/user.repositories';
import { User } from '../models';

@injectable()
export class UserService{

    constructor(
        @inject(UserRepository) private UserRepository:UserRepository
    ){

    }

    async getAllUser():Promise<User[]>{
        return this.UserRepository.getAll()
    }
}