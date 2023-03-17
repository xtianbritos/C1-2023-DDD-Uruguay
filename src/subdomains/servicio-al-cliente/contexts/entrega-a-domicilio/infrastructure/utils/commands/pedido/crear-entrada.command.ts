import { ApiProperty } from "@nestjs/swagger";

import { IsOptional, IsString, IsUUID } from "class-validator";

import { ICrearEntradaCommand } from "../../../../domain";

 export class CrearEntradaCommand implements ICrearEntradaCommand{

    @IsUUID()
    @IsOptional()
    @ApiProperty({ example: '4a36baf5-0c45-40cb-a066-5fcc053ffa45' })
    entradaId?: string;

    @IsString()
    @ApiProperty({ example: 'pan' })
    nombre?: string;
}