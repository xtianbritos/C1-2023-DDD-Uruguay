import { ApiProperty } from "@nestjs/swagger";

import { IsOptional, IsString, IsUUID } from "class-validator";

import { ICrearBebidaCommand } from "../../../../domain";

 export class CrearBebidaCommand implements ICrearBebidaCommand {

    @IsUUID()
    @IsOptional()
    @ApiProperty({ example: 'e6e1974a-c7f3-45be-9105-31ef44d53cee' })
    bebidaId?: string;

    @IsString()
    @ApiProperty({ example: 'coca' })
    nombre?: string;

    @IsString()
    @ApiProperty({ example: 'grande' })
    tamanio?: string;
}