import { Author } from "../entities/Author";

export default interface BookDTO{
    title:string;
    authors:Author[];
    yearPublished:string;
    yearLastPlublished?:string;
    quantityAvailable?:number;
    coverUrl?:string;
    rating?:number;
    descriptiion:string;
    category:string;
    subCategory:string;
}