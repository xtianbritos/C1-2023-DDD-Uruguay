import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, JoinColumn } from "typeorm"
import { ApiProperty } from '@nestjs/swagger'; 

import { TicketDomainEntityBase } from '../../../../../../domain/entities';
import { PedidoMySqlEntity } from "../pedido/pedido.entity";
import { ClienteMySqlEntity } from "./cliente.entity";
import { RepartidorMySqlEntity } from "./repartidor.entity";

@Entity()
export class TicketMySqlEntity extends TicketDomainEntityBase {

    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({ example: '4a36baf5-0c45-40cb-a066-5fcc053ffa45' })
    ticketId: string;

    @Column({ type: 'datetime' })
    @ApiProperty({ example: new Date() })
    createdAt?: number | Date;


    @OneToOne(() => ClienteMySqlEntity, (cliente) => cliente.ticket,
        { cascade: ['insert', 'update'],},
    )
    @JoinColumn()
    @ApiProperty({ example: 
        {
            clienteId: 'adee8ecb-c0fa-4974-99c0-777879814dc4',
            nombre: 'christian',
            direccion: 'setembrino',
            createdAt: '2023-03-16 22:26:39'
        } })
    cliente: ClienteMySqlEntity;


    @OneToOne(() => RepartidorMySqlEntity, (repartidor) => repartidor.ticket,
        {cascade: ['insert', 'update'],},
    )
    @JoinColumn()
    @ApiProperty({ example: 
        {
            clienteId: 'adee8ecb-c0fa-4974-99c0-777879814dc4',
            nombre: 'christian',
            vehiculo: 'moto',
            createdAt: '2023-03-16 22:26:39'
        } })
    repartidor: RepartidorMySqlEntity


    @OneToMany( ()=> PedidoMySqlEntity, (pedido)=> pedido.ticket,
        {cascade: ['insert', 'update'],},
    )
    @JoinColumn()
    @ApiProperty()
    listaPedidos?: PedidoMySqlEntity[];    
    
}