import { getCustomRepository } from "typeorm";
import { TagsReposiroties } from "../repositories/TagsRepositories"

interface ITagRequest {
  name: string;
}

class CreateTagSevices {
  async execute({ name }: ITagRequest) {

    const tagsRepositories = getCustomRepository(TagsReposiroties);
    if (!name) {
      throw new Error("Incorrect name!");
    }

    const tagAlreadyExists = await tagsRepositories.findOne({
      name
    });
    if (tagAlreadyExists) {
      throw new Error("Tag already exists");
    }

    const tag = tagsRepositories.create({
      name
    });
    await tagsRepositories.save(tag);

    return tag;
  }
}

export { CreateTagSevices };