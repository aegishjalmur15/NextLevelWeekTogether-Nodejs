import {Request, Response} from 'express';
import { ListUserSendedComplimentsService } from '../services/ListUserSendedComplimentsService';


class ListUserSendedComplimentsController{

    async handle(request: Request, response: Response){
        const { user_id } = request
        
        const sendedComplimentsService = new ListUserSendedComplimentsService();

        const sendedCompliments = await sendedComplimentsService.execute(user_id);

        return response.json(sendedCompliments);

    }

}

export { ListUserSendedComplimentsController }