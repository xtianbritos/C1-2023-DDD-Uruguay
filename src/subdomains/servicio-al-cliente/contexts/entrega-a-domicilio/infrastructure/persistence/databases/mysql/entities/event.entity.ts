import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"

@Entity()
export class EventMySqlEntity {
    @PrimaryGeneratedColumn('uuid')
    eventId?: string;

    @Column()
    type?: string;

    @Column()
    data?: string;

    @Column()
    createdAt?: Date;
}