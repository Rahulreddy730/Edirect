import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class ToDo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    task: string;

    @Column()
    complete: boolean;


}