import { getCustomRepository } from 'typeorm';
import { ComplimentsRepository } from '../repositories/ComplimentsRepository';
import { UserRepository } from '../repositories/UserRepository';
interface IComplimentRequest{
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string
   
}

class CreateComplimentService{

    async execute({tag_id,user_sender,user_receiver,message}:IComplimentRequest){
        
        if(user_sender === user_receiver){
            throw new Error("You are not able to send a complimento to your self")
        }

        const userRepository = getCustomRepository(UserRepository); 
        
        const user = userRepository.findOne(user_receiver);
        
        if(!user){
            throw new Error("User does not exists!")
        }

        const complimentsRepository = getCustomRepository(ComplimentsRepository);

        const compliment =  complimentsRepository.create({
            tag_id,
            user_sender,
            user_receiver,
            message
        })

        await complimentsRepository.save(compliment);

        return compliment;
    }

}

export { CreateComplimentService };