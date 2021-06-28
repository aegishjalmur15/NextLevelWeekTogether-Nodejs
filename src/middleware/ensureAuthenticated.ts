import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload{
    sub:string;
}

export default function  ensureAuthenticated(request: Request, response: Response, next: NextFunction){

    const Authtoken = request.headers.authorization;

    if(!Authtoken){
        return response.status(401).end();
    }

    const [, token ] = Authtoken.split(' ');

    try {
        const { sub } = verify(token, process.env.HASH_KEY) as IPayload;
       
        request.user_id = sub

        return next()
    }catch(err){
        return response.status(401).end();
    }

    

}