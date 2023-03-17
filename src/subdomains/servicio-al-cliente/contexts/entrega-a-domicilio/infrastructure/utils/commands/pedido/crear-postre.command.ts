import { ApiProperty } from "@nestjs/swagger";

import { IsBoolean, IsOptional, IsString, IsUUID } from "class-validator";

import { ICrearPostreCommand } from "../../../../domain";

export class CrearPostreCommand implements ICrearPostreCommand {

    @IsUUID()
    @IsOptional()
    @ApiProperty({ example: '4a36baf5-0c45-40cb-a066-5fcc053ffa45' })
    postreId?: string;

    @IsString()
    @ApiProperty({ example: 'torta' })
    nombre?: string;
    
    @IsString()
    @ApiProperty({ example: 'grande' })
    tamanio?: string;

    @IsBoolean()
    @ApiProperty({ example: true })
    esParaVeganos?: boolean;
}