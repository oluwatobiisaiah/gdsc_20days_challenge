import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./Book";
import { BookCategory } from "./BookCategory";

@Entity('book_subcategory')
export class BookSubCategory{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({type:String})
    subCategoryTitle: string;

    @Column({type:String})
    description:string;

    @OneToMany(()=>Book,(book)=>book.subCategory)
    books:Book[];

    @ManyToOne(()=>BookCategory,(category)=>category.id)
    category:BookCategory;

    @Column({type:"timestamp",default:()=> "CURRENT_TIMESTAMP"})
    createdAt:Date;
    
}