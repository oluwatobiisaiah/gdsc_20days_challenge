import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('users')
export class User{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({type:String})
    firstName: string;

    @Column({type:String})
    lastName: string;

    @Column({type:String,unique:true,nullable:false})
    username!: string;

    @Column({type:String,nullable:false})
    password:string;

    @Column({type:"timestamp",default:()=> "CURRENT_TIMESTAMP"})
    createdAt:Date;
}