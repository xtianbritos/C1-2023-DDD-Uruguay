import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"
import { ApiProperty } from '@nestjs/swagger'; 

import { RepartidorDomainEntityBase } from '../../../../../../domain/entities';
import { TicketMySqlEntity } from "./ticket.entity";

@Entity()
export class RepartidorMySqlEntity extends RepartidorDomainEntityBase {

    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({ example: '4a36baf5-0c45-40cb-a066-5fcc053ffa45' })
    repartidorId: string;

    @Column()
    @ApiProperty({ example: 'Pepe' })
    nombre: string;

    @Column()
    @ApiProperty({ example: 'moto' })
    vehiculo: string;

    @Column({ type: 'datetime' })
    @ApiProperty({ example: new Date() })
    createdAt?: number | Date;

    @OneToOne( ()=> TicketMySqlEntity, (ticket)=> ticket.repartidor )
    ticket: TicketMySqlEntity;
}