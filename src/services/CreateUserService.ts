import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/UserRepository';
import { hash } from 'bcryptjs';
interface IUserRequest{
    name: string;
    password: string,
    email: string;
    admin?:boolean
}

class CreateUserService{

 async execute({name, email, admin = false, password}: IUserRequest){
    if(!email){
        throw new Error("Email invalid");
    }
    
    const userRepo = getCustomRepository(UserRepository);

    const UserAlreadyExists = await userRepo.findOne({email,})
    
    if(UserAlreadyExists){
        throw new Error("User Already Exists");
    }
    const passwordHash = await hash(password, 8)
    const user = userRepo.create({
        name,
        email,
        admin,
        password: passwordHash
    })

    await userRepo.save(user);

    return user;
 }
}

export { CreateUserService }