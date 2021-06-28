import {Request, Response} from 'express';
import { ListUserReceivedComplimentsService } from '../services/ListUserReceivedComplimentsService';


class ListUserReceivedComplimentsController{

    async handle(request: Request, response: Response){
        const { user_id } = request
        
        const receivedComplimentsService = new ListUserReceivedComplimentsService();

        const receivedCompliments = await receivedComplimentsService.execute(user_id);

        return response.json(receivedCompliments);

    }

}

export { ListUserReceivedComplimentsController }