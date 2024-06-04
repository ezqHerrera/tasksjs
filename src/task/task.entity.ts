import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({default: "Pending"})
    state: string;

    constructor(task: Partial<Task>) {
        Object.assign(this, task);
    }
}