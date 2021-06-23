import { Request, Response, NextFunction } from 'express';
import { UserRepository } from '../repositories/UserRepository';

export default function ensureAdmin(request: Request, response: Response, next: NextFunction){
    // const id = request.body;
    
    // const userRepository = new UserRepository()

    // const user = userRepository.findOne({id});
    const admin = true;

    if(admin){
        return next();
    }

    return response.status(401).json({
        error: "Unauthorized",
    })


}