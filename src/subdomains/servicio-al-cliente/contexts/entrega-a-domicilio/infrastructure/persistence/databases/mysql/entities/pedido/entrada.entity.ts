import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"
import { ApiProperty } from '@nestjs/swagger'; 

import { PedidoMySqlEntity } from ".";
import { EntradaDomainEntityBase } from '../../../../../../domain/entities';

@Entity()
export class EntradaMySqlEntity extends EntradaDomainEntityBase {

    @ApiProperty({ example: '4a36baf5-0c45-40cb-a066-5fcc053ffa45' })
    @PrimaryGeneratedColumn('uuid')
    entradaId: string;

    @ApiProperty({ example: 'pan' })
    @Column()
    nombre: string;

    @ApiProperty({ example: new Date() })
    @Column({ type: 'datetime' })
    createdAt?: number | Date;

    @OneToOne( ()=> PedidoMySqlEntity, (pedido)=> pedido.entrada )
    pedido: PedidoMySqlEntity;
}