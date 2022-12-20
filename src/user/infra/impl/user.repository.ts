import { Injectable } from "@nestjs/common";
import { IUserRepository } from "../user.repository";

@Injectable()
export class UserRepository implements IUserRepository {

}

