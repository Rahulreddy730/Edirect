import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import {ToDo} from "./ToDo";

@Entity()
export class Project {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    name: string;

    @Column("text")
    description: string;

    @ManyToMany(type => ToDo, {
        cascade: true,eager:true
    })
    @JoinTable()
    todos : ToDo[];

}