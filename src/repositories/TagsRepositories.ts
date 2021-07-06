import { EntityRepository, Repository } from "typeorm";
import { Tag } from '../entities/Tag';

@EntityRepository(Tag)
class TagsReposiroties extends Repository<Tag>{ };

export { TagsReposiroties };