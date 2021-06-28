import { Request, Response, NextFunction } from 'express';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/UserRepository';


export default async function ensureAdmin(request: Request, response: Response, next: NextFunction){
    
    const { user_id } = request;
    
    const userRepository = getCustomRepository(UserRepository);

    const { admin } = await userRepository.findOne({id:user_id});

    if(admin){
        return next();
    }

    return response.status(401).json({
        error: "Unauthorized",
    })


}