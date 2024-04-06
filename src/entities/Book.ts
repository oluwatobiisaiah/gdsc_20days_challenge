import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Author } from "./Author";
import { BookCategory } from "./BookCategory";
import { BookSubCategory } from "./BookSubCategory";

@Entity('books')
export class Book{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({type:String})
    title: string;

    @ManyToOne(()=>Author,(author)=>author.id) //as there can be author and co-authors
    authors:Author[];

    @Column({type:String})
    yearPublished:string;

    @Column({type:String})
    yearLastPlublished:string;

    @Column({type:Number})
    quantityAvailable:number;

    @Column({type:String})
    coverUrl:string;

    @Column({type:Number})
    rating:number;

    @Column({type:String})
    descriptiion:string;

    @ManyToOne(()=>BookCategory,(category)=>category.id)
    category:string;

    @ManyToOne(()=>BookSubCategory,(subCategory)=>subCategory.id)
    subCategory:string;

    @Column({type:"timestamp",default:()=> "CURRENT_TIMESTAMP"})
    createdAt:Date;

}