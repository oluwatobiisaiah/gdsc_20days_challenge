import { injectable } from "tsyringe";
import BaseService from "../base.service";
import AuthorRepository from "../../repositories/author.repository";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { Author } from "../../entities/Author";

export interface IAuthorService{
    getAll();
    getOne(id:string);
    save(data:any);
    update(searchParams:any, data:QueryDeepPartialEntity<AuthorRepository>);
    delete(id:string);
}

@injectable()
export default class AuthorService extends BaseService<AuthorRepository> implements IAuthorService{
    constructor(){
        super(Author)
    }


}