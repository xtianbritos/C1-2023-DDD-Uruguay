import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"
import { ApiProperty } from '@nestjs/swagger'; 

import { PedidoMySqlEntity } from ".";
import { PlatoPrincipalDomainEntityBase } from '../../../../../../domain/entities';

@Entity()
export class PlatoPrincipalMySqlEntity extends PlatoPrincipalDomainEntityBase {

    @ApiProperty({ example: '4a36baf5-0c45-40cb-a066-5fcc053ffa45' })
    @PrimaryGeneratedColumn('uuid')
    platoPrincipalId: string;

    @ApiProperty({ example: 'Milanesa' })
    @Column()
    nombre: string;

    @ApiProperty({ example: 'papas fritas' })
    @Column()
    guarnicion: string;

    @ApiProperty({ example: new Date() })
    @Column({ type: 'datetime' })
    createdAt?: number | Date;

    @OneToOne( ()=> PedidoMySqlEntity, (pedido)=> pedido.platoPrincipal )
    pedido: PedidoMySqlEntity;
}