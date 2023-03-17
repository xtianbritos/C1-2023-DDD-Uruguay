import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"
import { ApiProperty } from '@nestjs/swagger'; 

import { PedidoMySqlEntity } from ".";
import { PostreDomainEntityBase } from '../../../../../../domain/entities';

@Entity()
export class PostreMySqlEntity extends PostreDomainEntityBase {

    @ApiProperty({ example: '4a36baf5-0c45-40cb-a066-5fcc053ffa45' })
    @PrimaryGeneratedColumn('uuid')
    postreId: string;

    @ApiProperty({ example: 'torta de chocolate' })
    @Column()
    nombre: string;

    @ApiProperty({ example: 'grande' })
    @Column()
    tamanio?: string;

    @ApiProperty({ example: true })
    @Column()
    esParaVeganos?: boolean;

    @ApiProperty({ example: new Date() })
    @Column({ type: 'datetime' })
    createdAt?: number | Date;

    @OneToOne( ()=> PedidoMySqlEntity, (pedido)=> pedido.postre )
    pedido: PedidoMySqlEntity;
}