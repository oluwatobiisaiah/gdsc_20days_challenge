import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./Book";

@Entity()
export class BookCategory{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({type:String})
    categoryTitle: string;

    @Column({type:String})
    description:string;

    @OneToMany(()=>Book,(book)=>book.category)
    books:Book[];

    subCategory;

    @Column({type:"timestamp",default:()=> "CURRENT_TIMESTAMP"})
    createdAt:Date;
    
}