import { getCustomRepository } from 'typeorm';
import { TagRepository } from '../repositories/TagsRepository';

class CreateTagService{
    async execute(name:string){
        if(!name){
            throw new Error("Invalid Name");
        }

        const tagsRepository = getCustomRepository(TagRepository)

        const tagAlreadyExists = await tagsRepository.findOne({name});

        if(tagAlreadyExists){
            throw new Error("Tag already exists")
        }

        const tag = tagsRepository.create({name});
        await tagsRepository.save(tag);

        return tag;
    }
}

export { CreateTagService }