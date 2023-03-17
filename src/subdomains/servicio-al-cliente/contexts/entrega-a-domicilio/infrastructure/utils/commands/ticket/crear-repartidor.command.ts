import { ApiProperty } from "@nestjs/swagger";

import { IsOptional, IsString, IsUUID } from "class-validator";

import { ICrearRepartidorCommand } from "../../../../domain";

export class CrearRepartidorCommand implements ICrearRepartidorCommand {

    @IsUUID()
    @IsOptional()
    @ApiProperty({ example: '4a36baf5-0c45-40cb-a066-5fcc053ffa45' })
    repartidorId?: string;

    @IsString()
    @ApiProperty({ example: 'pepe' })
    nombre?: string;

    @IsString()
    @ApiProperty({ example: 'moto' })
    vehiculo?: string;
}