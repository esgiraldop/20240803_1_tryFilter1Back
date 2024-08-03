import { container } from "tsyringe";
import { UserController } from "../controllers/user.controllers";
import { UserService } from "../services/user.services";
import { UserRepository } from "../repositories/user.repositories";

container.register(UserController,{
    useClass: UserController
})

container.register(UserService,{
    useClass: UserService
})

container.register(UserRepository,{
    useClass: UserRepository
})