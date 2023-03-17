import { ApiProperty } from "@nestjs/swagger";

import { IsOptional, IsString, IsUUID } from "class-validator";

import { ICrearPlatoPrincipalCommand } from "../../../../domain";

export class CrearPlatoPrincipalCommand implements ICrearPlatoPrincipalCommand {
    
    @IsUUID()
    @IsOptional()
    @ApiProperty({ example: '4a36baf5-0c45-40cb-a066-5fcc053ffa45' })
    platoPrincipalId?: string;

    @IsString()
    @ApiProperty({ example: 'milanesa' })
    nombre?: string;
    
    @IsString()
    @ApiProperty({ example: 'pasas fritas' })
    guarnicion?: string;
}