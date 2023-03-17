import { ApiProperty } from "@nestjs/swagger";

import { IsOptional, IsString, IsUUID } from "class-validator";

import { ICambiarNombreBebidaCommand } from "../../../../domain";

 export class CambiarNombreBebidaCommand implements ICambiarNombreBebidaCommand {

    @IsUUID()
    @ApiProperty({ example: 'e6e1974a-c7f3-45be-9105-31ef44d53cee' })
    bebidaId: string;

    @IsString()
    @ApiProperty({ example: 'pepsi' })
    nuevoNombre: string;
}