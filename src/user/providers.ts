import { UserService } from "./domain/impl/user.service";
import { UserRepository } from "./infra/impl/user.repository";

export const userProviders = [
    {
        provide: 'IUserRepository',
        useFactory: () => new UserRepository()
    },
    {
        provide: 'IUserService',
        useFactory: () => new UserService()
    }
]
