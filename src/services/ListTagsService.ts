import { getCustomRepository } from "typeorm"
import { TagRepository } from "../repositories/TagsRepository"
import { classToPlain } from 'class-transformer';
class ListTagsService{

    async execute(){
        const tagRepository = getCustomRepository(TagRepository);

        const tags = tagRepository.find();

        return classToPlain(tags);
    }

}

export { ListTagsService }