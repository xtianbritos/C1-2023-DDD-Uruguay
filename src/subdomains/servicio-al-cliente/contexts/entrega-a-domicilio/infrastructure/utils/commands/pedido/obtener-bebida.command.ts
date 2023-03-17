import { ApiProperty } from "@nestjs/swagger";

import { IsOptional, IsUUID } from "class-validator";

import { IObtenerBebidaCommand } from "../../../../domain";

export class ObtenerBebidaCommand implements IObtenerBebidaCommand{

    @IsUUID()
    @IsOptional()
    @ApiProperty({ example: 'e6e1974a-c7f3-45be-9105-31ef44d53cee' })
    bebidaId: string;
}