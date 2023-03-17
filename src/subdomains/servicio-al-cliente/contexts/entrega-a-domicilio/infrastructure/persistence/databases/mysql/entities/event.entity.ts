import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { ApiProperty } from '@nestjs/swagger'; 

@Entity('event', { schema: 'public' })
export class EventMySqlEntity {

    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({ example: '4a36baf5-0c45-40cb-a066-5fcc053ffa45' })
    eventId?: string;

    @Column()
    @ApiProperty({ example: 'entrega_a_domicilio.postre-creado' })
    type: string;

    @Column()
    @ApiProperty({ example: '{"postreId":"e96988af-0133-49c8-816d-2832df4a6cb8","nombre":"torta","tamanio":"grande","esParaVeganos":true,"createdAt":"2023-03-17T01:25:10.438Z"}' })
    data: string;

    @Column()
    @ApiProperty({ example: '2023-03-16 22:25:10' })
    createdAt?: Date;
}