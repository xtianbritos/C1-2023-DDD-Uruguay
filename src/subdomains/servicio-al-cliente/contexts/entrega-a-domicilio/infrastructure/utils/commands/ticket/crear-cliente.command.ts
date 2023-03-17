import { ApiProperty } from "@nestjs/swagger";

import { IsOptional, IsString, IsUUID } from "class-validator";

import { ICrearClienteCommand } from "../../../../domain";

export class CrearClienteCommand implements ICrearClienteCommand {

    @IsUUID()
    @IsOptional()
    @ApiProperty({ example: '4a36baf5-0c45-40cb-a066-5fcc053ffa45' })
    clienteId?: string;

    @IsString()
    @ApiProperty({ example: 'christian' })
    nombre?: string;

    @IsString()
    @ApiProperty({ example: 'setembrino 123' })
    direccion?: string;
}