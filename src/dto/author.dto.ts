import { Book } from "../entities/Book";

export default interface AuthorDTO{
    firstName:string;
    lastName:string;
    books?:Book[]
}