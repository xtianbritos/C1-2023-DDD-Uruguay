import { ApiProperty } from "@nestjs/swagger";

import { IsString, IsUUID } from "class-validator";

import { ICambiarTamanioPostreCommand } from "../../../../domain/interfaces/commands/pedido";

 export class CambiarTamanioPostreCommand implements ICambiarTamanioPostreCommand {

    @IsUUID()
    @ApiProperty({ example: '268b4711-8698-41c1-be1d-914f3f97f990' })
    postreId: string;

    @IsString()
    @ApiProperty({ example: 'mediano' })
    nuevoTamanio: string;
}