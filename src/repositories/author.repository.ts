import AuthorDTO from "../dto/author.dto";
import { Author } from "../entities/Author";
import BaseRepository, { IBaseRepository } from "./base.repository";

export interface IAuthorRepository<T> extends IBaseRepository<T> {

}

export default class AuthorRepository extends BaseRepository<Author> implements IAuthorRepository<AuthorDTO>{
    constructor(){
        super(Author)
    }

}