import {
  DeepPartial,
  Repository,
  ObjectLiteral,
  EntityTarget,
  UpdateResult,
  InsertResult,
  Like,
} from "typeorm";
import { AppDataSource } from "../database/data-source";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
export interface IBaseRepository<T> {
  save(data: DeepPartial<T>): Promise<T>;
  findAll(filters?: Record<string, any>): Promise<T[]>;
  findOne(searchParams: any): Promise<T | null>;
  update(searchParams: any, data: QueryDeepPartialEntity<T>): Promise<UpdateResult>;
  upsert(fieldParam: any, data: QueryDeepPartialEntity<T>): Promise<InsertResult>;
  delete(id: string): Promise<void>;
  softDelete(id: string | number): Promise<void>;
  recoverSoftDeletedEntity(id: string | number): Promise<UpdateResult>;
}

export default class BaseRepository<T extends ObjectLiteral> implements IBaseRepository<T> {
  private repository: Repository<T>;

  constructor(entity: EntityTarget<T>) {
    this.repository = AppDataSource.getRepository(entity);
    console.log(this.repository)
  }

  save = async (data: DeepPartial<T>): Promise<T> => {
    const resource = this.repository.create(data);
    return await this.repository.save(resource);
  };

  findAll = async (filters = {}): Promise<T[]> => {
    const resources = await this.repository.find(filters);
    return resources;
  };

  findOne = async (searchParams: any): Promise<T | null> => {
    const resource = await this.repository.findOne({ where: searchParams });
    return resource;
  };

  search = async (searchParams: any): Promise<T[]> => {
    const where: any = {};

    Object.keys(searchParams).forEach((paramKey) => {
      const paramValue = searchParams[paramKey];
      if (paramValue !== undefined && paramValue !== null) {
        where[paramKey] = Like(`%${paramValue}%`);
      }
    });

    const resources = await this.repository.find({ where });
    return resources;

  }

  update = async (
    searchParams: any,
    data: QueryDeepPartialEntity<T>
  ): Promise<UpdateResult> => {
    const resource = await this.repository.update(searchParams, data);
    return resource;
  };

  upsert = async (
    fieldParam: any,
    data: QueryDeepPartialEntity<T>
  ): Promise<InsertResult> => {
    const resource = await this.repository.upsert(data, fieldParam);
    return resource;
  };

  delete = async (id: string): Promise<void> => {
    await this.repository.delete(id);
  };

  softDelete = async (id: string | number): Promise<void> => {
    await this.repository.softDelete(id);
  };

  recoverSoftDeletedEntity = async (
    id: string | number
  ): Promise<UpdateResult> => {
    const resource = await this.repository.restore(id);
    return resource;
  };
}
