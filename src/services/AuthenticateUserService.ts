import { getCustomRepository } from 'typeorm';
import {UserRepository} from '../repositories/UserRepository';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface IAuthenticateUserRequest{
    email: string
    password: string
}

class AuthenticateUserService{

    async execute({email, password}:IAuthenticateUserRequest){

        if(!email){
            throw new Error("Invalide Email!")
        }

        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.findOne({email});

        if(!user){
            throw new Error("Email/Password incorrect! ");
        }
        const passwordMatch = await compare(password, user.password);
        
        if(!passwordMatch ){
            throw new Error("Email/Password incorrect! ");
        }

        const token = sign({
            email: user.email
        }, process.env.HASH_KEY,{
            subject: user.id, expiresIn:"1d"
        })

        return token;
    }
}

export { AuthenticateUserService } 