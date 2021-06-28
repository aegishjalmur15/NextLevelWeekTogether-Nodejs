import { Router, Request,Response } from 'express';
import { AuthenticaUserController } from './controllers/AuthenticateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { ListUserReceivedComplimentsController } from './controllers/ListUserReceivedComplimentsController';
import { ListUserSendedComplimentsController } from './controllers/ListUserSendedComplimentsController';
import { ListTagsController } from './controllers/ListTagsController';
import { ListUsersController } from './controllers/ListUsersController';
import ensureAuthenticated from './middleware/ensureAuthenticated';
import ensureAdmin from './middleware/ensureAdmin';


const routes = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticaUserController();
const createComplimentController = new CreateComplimentController();
const listReceivedCompliments = new ListUserReceivedComplimentsController();
const listSendedCompliments = new ListUserSendedComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

routes.post("/Users", createUserController.handle);
routes.post("/Tags", ensureAuthenticated,ensureAdmin ,createTagController.handle);
routes.post("/AuthUser", authenticateUserController.handle );
routes.post("/Compliments", ensureAuthenticated,createComplimentController.handle);

routes.get("/User/Compliments/send", ensureAuthenticated, listSendedCompliments.handle );
routes.get("/User/Compliments/received", ensureAuthenticated, listReceivedCompliments.handle );
routes.get("/Tags", ensureAuthenticated, listTagsController.handle);
routes.get("/Users", ensureAuthenticated, listUsersController.handle);

routes.get("/", (resquest : Request, response: Response)=>{
    return response.json("tudo ok!");
})

export { routes }