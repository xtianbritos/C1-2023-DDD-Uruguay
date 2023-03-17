import { ApiProperty } from "@nestjs/swagger";

import { IsBoolean, IsUUID } from "class-validator";

import { ICambiarPostreEsParaVeganosCommand } from "../../../../domain/interfaces/commands/pedido/cambiar-postre-es-para-veganos.command";

 export class CambiarPostreEsParaVeganosCommand implements ICambiarPostreEsParaVeganosCommand {

    @IsUUID()
    @ApiProperty({ example: '268b4711-8698-41c1-be1d-914f3f97f990' })
    postreId: string;

    @IsBoolean()
    @ApiProperty({ example: false })
    nuevoEstado: boolean;
}