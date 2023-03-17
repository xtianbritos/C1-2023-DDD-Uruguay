import { ApiProperty } from "@nestjs/swagger";

import { IsNumber, IsUUID } from "class-validator";

import { ICambiarPrecioPedidoCommand } from "../../../../domain";

 export class CambiarPrecioPedidoCommand implements ICambiarPrecioPedidoCommand {

    @IsUUID()
    @ApiProperty({ example: '268b4711-8698-41c1-be1d-914f3f97f990' })
    pedidoId: string;

    @IsNumber()
    @ApiProperty({ example: 200 })
    nuevoPrecio: number;
}