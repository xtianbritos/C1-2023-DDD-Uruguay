import { ApiProperty } from "@nestjs/swagger";

import { IsUUID } from "class-validator";

import { IObtenerPedidoCommand } from "../../../../domain";

export class ObtenerPedidoCommand implements IObtenerPedidoCommand {

    @IsUUID()
    @ApiProperty({ example: 'e6e1974a-c7f3-45be-9105-31ef44d53cee' })
    pedidoId: string;
}