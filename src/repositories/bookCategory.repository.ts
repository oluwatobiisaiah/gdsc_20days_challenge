import BookDTO from "../dto/book.dto";
import BookCategoryDTO from "../dto/bookCategory.dto";
import { Book } from "../entities/Book";
import { BookCategory } from "../entities/BookCategory";
import BaseRepository, { IBaseRepository } from "./base.repository";

export interface IBookCategoryRepository<T> extends IBaseRepository<T> {

}

export default class BookRepository extends BaseRepository<BookCategory> implements IBookCategoryRepository<BookCategoryDTO>{
    constructor(){
        super(BookCategory)
    }

}