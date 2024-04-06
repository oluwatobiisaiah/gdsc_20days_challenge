import { DeepPartial, EntityTarget, ObjectLiteral, Repository } from "typeorm";
import { injectable } from "tsyringe";
import { AppDataSource } from "../database/data-source";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

@injectable()
export default class BaseService<T extends ObjectLiteral> {
  private repository: Repository<T>;

  constructor(entity: EntityTarget<T>) {
    this.repository = AppDataSource.getRepository(entity);
  }

  save = async (data: DeepPartial<T>): Promise<T> => {
    const resource = await this.repository.save(data);
    return resource;
  };

  update = async (searchParams:any,data:QueryDeepPartialEntity<T>)=>{
    const resource = await this.repository.update(searchParams,data);
    return resource;
  }
  
  getAll = async (filters = {}): Promise<T[]> => {
    const resources = await this.repository.find(filters);
    return resources;
  };

  getOne = async (searchParams: any): Promise<T | null> => {
    const resource = await this.repository.findOne({ where: searchParams});
    return resource;
  };

  delete = async (id: string): Promise<void> => {
    await this.repository.delete(id);
  };
}


