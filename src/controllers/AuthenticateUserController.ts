import { Request, Response  } from 'express';
import { AuthenticateUserService } from '../services/AuthenticateUserService'; 

class AuthenticaUserController{
    async handle(request: Request, response: Response){
        const { email, password } = request.body

        const auth = new AuthenticateUserService();

        const token = await auth.execute({email, password})

        response.json(token).status(200);
    }
}

export { AuthenticaUserController }