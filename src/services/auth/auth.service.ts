import { inject, injectable } from "tsyringe";
import BaseService from "../base.service";
import UserRepository from "../../repositories/user.repository";
import { User } from "../../entities/User";
import { UserDTO } from "../../dto/user.dto";
import { createCustomError } from "../../errors/customErrors";
import { compareHashedSting, generateUsername } from "../../utils/helpers";
import { generateJWT } from "../../utils/helpers/token";

export interface IAuthService{
    signUp(data:UserDTO);
    login(data:Pick<UserDTO, "username"|"password">);
}

@injectable()
export default class AuthService extends BaseService<UserRepository> implements IAuthService{
    private _userRepository: UserRepository;

    constructor(@inject(UserRepository) userRepository){
        super(User);
        this._userRepository = userRepository;
    }

    async signUp(data: UserDTO) {
        const [checkForExisingUser,existingNames] = await Promise.all([this._userRepository.findOne({where:{username:data.username}}),this._userRepository.search({ firstName: data.firstName, lastName: data.lastName })]) ;

        if(checkForExisingUser) throw createCustomError('User already exist', 400);
        if(!data.username){
            data.username = generateUsername(data.firstName,existingNames.map((user)=> user.username),data.lastName);
        }
        const user = await this._userRepository.save(data);
        const { password, ...rest } = user;
        return rest;
    }

    async login(data: Pick<UserDTO,"username"|"password">) {
        const user = await this._userRepository.findOne({where:{username:data.username}});
        if(!user) throw createCustomError('Invalid credential', 400);
        const { password: hashedPassword, ...rest } = user;

        if(compareHashedSting(data.password, hashedPassword)){
            const token = generateJWT({id:user.id,username:user.username},"1d");
            return {token,user:rest};
        }

    }

}