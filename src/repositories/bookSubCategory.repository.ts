import BookSubCategoryDTO from "../dto/bookSubCategory.dto";
import { Book } from "../entities/Book";
import { BookSubCategory } from "../entities/BookSubCategory";
import BaseRepository, { IBaseRepository } from "./base.repository";

export interface IBookRepository<T> extends IBaseRepository<T> {

}

export default class BookSubCategoryRepository extends BaseRepository<BookSubCategory> implements IBookRepository<BookSubCategoryDTO>{
    constructor(){
        super(BookSubCategory)
    }

}