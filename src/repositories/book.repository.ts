import BookDTO from "../dto/book.dto";
import { Book } from "../entities/Book";
import BaseRepository, { IBaseRepository } from "./base.repository";

export interface IBookRepository<T> extends IBaseRepository<T> {

}

export default class BookRepository extends BaseRepository<Book> implements IBookRepository<BookDTO>{
    constructor(){
        super(Book)
    }

}