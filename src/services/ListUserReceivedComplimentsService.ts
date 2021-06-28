import { getCustomRepository } from "typeorm"
import { ComplimentsRepository } from "../repositories/ComplimentsRepository";

class ListUserReceivedComplimentsService{

    async execute(user_id:string){
        const complimentsRepository = getCustomRepository(ComplimentsRepository);
        const compliments = await complimentsRepository.find({
            where: {
                user_receiver:user_id
            }, 
            relations:["userSender","tag","userReceiver"]
        }
        );
        
        return compliments
    }
}

export { ListUserReceivedComplimentsService }