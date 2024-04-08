import { injectable } from "tsyringe";
import BaseService from "../base.service";
import BookRepository from "../../repositories/book.repository";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { Book } from "../../entities/Book";

export interface IBookService{
    getAll();
    getOne(id:string);
    save(data:any);
    update(searchParams:any, data:QueryDeepPartialEntity<BookRepository>);
    delete(id:string);
}

@injectable()
export default class BookService extends BaseService<BookRepository> implements IBookService{
    constructor(){
        super(Book)
    }


}