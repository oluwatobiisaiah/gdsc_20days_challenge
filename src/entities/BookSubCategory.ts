import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./Book";
import { BookCategory } from "./BookCategory";

@Entity()
export class BookSubCategory{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({type:String})
    subategoryTitle: string;

    @Column({type:String})
    description:string;

    @OneToMany(()=>Book,(book)=>book.subCategory)
    books:Book[];

    @ManyToOne(()=>BookCategory,(category)=>category.id)
    category:string;
    
    @Column({type:"timestamp",default:()=> "CURRENT_TIMESTAMP"})
    createdAt:Date;
    
}