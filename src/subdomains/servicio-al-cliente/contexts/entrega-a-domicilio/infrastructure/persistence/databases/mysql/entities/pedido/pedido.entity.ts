import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToMany, JoinColumn } from "typeorm"
import { ApiProperty } from '@nestjs/swagger'; 

import { PedidoDomainEntityBase } from '../../../../../../domain/entities';
import { TicketMySqlEntity } from "../ticket";
import {
    PostreMySqlEntity,
    BebidaMySqlEntity,
    EntradaMySqlEntity,
    PlatoPrincipalMySqlEntity
} from ".";

@Entity()
export class PedidoMySqlEntity extends PedidoDomainEntityBase {

    @ApiProperty({ example: '4a36baf5-0c45-40cb-a066-5fcc053ffa45' })
    @PrimaryGeneratedColumn('uuid')
    pedidoId?: string;

    @ApiProperty({ example: 'preparándose' })
    @Column()
    estado?: string;

    @ApiProperty({ example: 154 })
    @Column()
    precio?: number;

    @ApiProperty({ example: new Date() })
    @Column({ type: 'datetime' })
    createdAt?: number | Date;


    @OneToOne(() => EntradaMySqlEntity, (entrada) => entrada.pedido,
        { cascade: ['insert', 'update'],},
    )
    @JoinColumn()
    entrada: EntradaMySqlEntity;

    @OneToOne(() => PlatoPrincipalMySqlEntity, (platoPrincipal) => platoPrincipal.pedido,
        { cascade: ['insert', 'update'],},
    )
    @JoinColumn()
    platoPrincipal: PlatoPrincipalMySqlEntity;


    @OneToOne(() => BebidaMySqlEntity, (bebida) => bebida.pedido,
        { cascade: ['insert', 'update'],},
    )
    @JoinColumn()
    bebida: BebidaMySqlEntity;

    @OneToOne(() => PostreMySqlEntity, (postre) => postre.pedido,
        { cascade: ['insert', 'update'],},
    )
    @JoinColumn()
    postre: PostreMySqlEntity;


    @ManyToMany( ()=> TicketMySqlEntity, (ticket)=> ticket.listaPedidos )
    ticket: TicketMySqlEntity;
}