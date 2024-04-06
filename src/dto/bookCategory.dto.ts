import { Book } from "../entities/Book";

export default interface BookCategoryDTO{
    categoryTitle:string;
    description:string;
    books?:Book[];
}