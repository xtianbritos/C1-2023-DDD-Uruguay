import { ApiProperty } from "@nestjs/swagger";

import { IsString, IsUUID } from 'class-validator';

import { ICambiarEstadoPedidoCommand } from "../../../../domain";

 export class CambiarEstadoPedidoCommand implements ICambiarEstadoPedidoCommand {

    @IsUUID()
    @ApiProperty({ example: '268b4711-8698-41c1-be1d-914f3f97f990' })
    pedidoId: string;

    @IsString()
    @ApiProperty({ example: 'listo' })
    nuevoEstado: string;
}