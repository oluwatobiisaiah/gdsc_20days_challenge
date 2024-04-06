import { Book } from "../entities/Book";
import { BookCategory } from "../entities/BookCategory";

export default interface BookSubCategoryDTO{
    subCategoryTitle:string;
    description:string;
    books?:Book[];
    category:BookCategory;
}