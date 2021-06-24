import { Router, Request,Response } from 'express';
import { AuthenticaUserController } from './controllers/AuthenticateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';

import ensureAdmin from './middleware/ensureAdmin';

const routes = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticaUserController();
const createComplimentController = new CreateComplimentController();

routes.post("/Users", createUserController.handle);
routes.post("/Tags", ensureAdmin ,createTagController.handle);
routes.post("/AuthUser", authenticateUserController.handle );
routes.post("/Compliments", createComplimentController.handle);


routes.get("/", (resquest : Request, response: Response)=>{
    return response.json("tudo ok!");
})

export { routes }