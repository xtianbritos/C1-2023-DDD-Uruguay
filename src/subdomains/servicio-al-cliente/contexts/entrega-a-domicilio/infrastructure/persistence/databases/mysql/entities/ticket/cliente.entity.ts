import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"
import { ApiProperty } from '@nestjs/swagger'; 

import { ClienteDomainEntityBase } from '../../../../../../domain/entities';
import { TicketMySqlEntity } from "./ticket.entity";

@Entity()
export class ClienteMySqlEntity extends ClienteDomainEntityBase {

    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({ example: '4a36baf5-0c45-40cb-a066-5fcc053ffa45' })
    clienteId: string;

    @Column()
    @ApiProperty({ example: 'Christian' })
    nombre: string;

    @Column()
    @ApiProperty({ example: 'Montevideo 097' })
    direccion: string;

    @Column({ type: 'datetime' })
    @ApiProperty({ example: new Date() })
    createdAt?: number | Date;

    @OneToOne( ()=> TicketMySqlEntity, (ticket)=> ticket.cliente )
    ticket: TicketMySqlEntity;
}