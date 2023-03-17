import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"
import { ApiProperty } from '@nestjs/swagger'; 

import { PedidoMySqlEntity } from ".";
import { BebidaDomainEntityBase } from '../../../../../../domain/entities';

@Entity()
export class BebidaMySqlEntity extends BebidaDomainEntityBase {

    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({ example: '4a36baf5-0c45-40cb-a066-5fcc053ffa45' })
    bebidaId: string;

    @Column()
    @ApiProperty({ example: 'jugo' })
    nombre: string;

    @Column()
    @ApiProperty({ example: 'grande' })
    tamanio?: string;

    @Column({ type: 'datetime' })
    @ApiProperty({ example: new Date() })
    createdAt?: number | Date;

    @OneToOne( ()=> PedidoMySqlEntity, (pedido)=> pedido.bebida )
    pedido: PedidoMySqlEntity;
}