import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/UserRepository';

interface IUserRequest{
    name: string;
    email: string;
    admin?:boolean
}

class CreateUserService{

 async execute({name, email, admin}: IUserRequest){
    if(!email){
        throw new Error("Email invalid");
    }
    
    const userRepo = getCustomRepository(UserRepository);

    const UserAlreadyExists = await userRepo.findOne({email,})
    
    if(UserAlreadyExists){
        throw new Error("User Already Exists");
    }

    const user = userRepo.create({
        name,
        email,
        admin
    })

    await userRepo.save(user);

    return user;
 }
}

export { CreateUserService }