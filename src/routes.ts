import { Router, Request,Response } from 'express';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import ensureAdmin from './middleware/ensureAdmin';
const routes = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController()

routes.post("/Users", createUserController.handle);
routes.post("/Tags", ensureAdmin ,createTagController.handle);

routes.get("/", (resquest : Request, response: Response)=>{
    return response.json("tudo ok!");
})

export { routes }