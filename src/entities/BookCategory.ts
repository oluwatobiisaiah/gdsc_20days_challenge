import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./Book";
import { BookSubCategory } from "./BookSubCategory";

@Entity('book_category')
export class BookCategory{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({type:String})
    categoryTitle: string;

    @Column({type:String})
    description:string;

    @OneToMany(()=>Book,(book)=>book.category)
    books:Book[];

    @OneToMany(()=>BookSubCategory,(subCategory)=>subCategory.id)
    subCategory:BookSubCategory[];

    @Column({type:"timestamp",default:()=> "CURRENT_TIMESTAMP"})
    createdAt:Date;
    
}