import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./Book";

@Entity()
export class Author{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({type:String})
    firstName: string;

    @Column({type:String})
    lastName:string;

    @OneToMany(()=>Book,(book)=>book.author)
    books:Book[]

    @Column({type:"timestamp",default:()=> "CURRENT_TIMESTAMP"})
    createdAt:Date;
    
}