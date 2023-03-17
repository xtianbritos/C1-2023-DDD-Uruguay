import { ApiProperty } from "@nestjs/swagger";

import { IsString, IsUUID } from "class-validator";

import { ICambiarTamanioBebidaCommand } from "../../../../domain/interfaces/commands/pedido";

 export class CambiarTamanioBebidaCommand implements ICambiarTamanioBebidaCommand {

    @IsUUID()
    @ApiProperty({ example: 'e6e1974a-c7f3-45be-9105-31ef44d53cee' })
    bebidaId: string;

    @IsString()
    @ApiProperty({ example: 'mediano' })
    nuevoTamanio: string;
}