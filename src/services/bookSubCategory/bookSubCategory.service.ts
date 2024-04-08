import { injectable } from "tsyringe";
import BaseService from "../base.service";
import BookSubCategoryRepository from "../../repositories/bookSubCategory.repository";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { BookSubCategory } from "../../entities/BookSubCategory";

export interface IBookSubCategoryService{
    getAll();
    getOne(id:string);
    save(data:any);
    update(searchParams:any, data:QueryDeepPartialEntity<BookSubCategoryRepository>);
    delete(id:string);
}

@injectable()
export default class BookSubCategoryService extends BaseService<BookSubCategoryRepository> implements IBookSubCategoryService{
    constructor(){
        super(BookSubCategory)
    }


}