import { UserDTO } from "../dto/user.dto";
import { User } from "../entities/User";
import BaseRepository, { IBaseRepository } from "./base.repository";

export interface IUserRepository<T> extends IBaseRepository<T> {

}

export default class UserRepository extends BaseRepository<User> implements IUserRepository<UserDTO>{
    constructor(){
        super(User)
    }

}