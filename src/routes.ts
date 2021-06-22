import { Router, Request,Response } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
const routes = Router();
const createUserController = new CreateUserController();

routes.post("/Users", createUserController.handle);

routes.get("/", (resquest : Request, response: Response)=>{
    return response.json("tudo ok!");
})

export { routes }