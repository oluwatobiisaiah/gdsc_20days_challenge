import { injectable } from "tsyringe";
import BaseService from "../base.service";
import BookCategoryRepository from "../../repositories/bookCategory.repository";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { BookCategory } from "../../entities/BookCategory";

export interface IBookCategoryService{
    getAll();
    getOne(id:string);
    save(data:any);
    update(searchParams:any, data:QueryDeepPartialEntity<BookCategoryRepository>);
    delete(id:string);
}

@injectable()
export default class BookCategoryService extends BaseService<BookCategoryRepository> implements IBookCategoryService{
    constructor(){
        super(BookCategory)
    }


}