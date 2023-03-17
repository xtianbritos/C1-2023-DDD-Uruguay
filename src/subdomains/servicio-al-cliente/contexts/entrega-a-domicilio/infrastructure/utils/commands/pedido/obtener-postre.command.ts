import { ApiProperty } from "@nestjs/swagger";

import { IsUUID } from "class-validator";

import { IObtenerPostreCommand } from "../../../../domain";

export class ObtenerPostreCommand implements IObtenerPostreCommand{

    @IsUUID()
    @ApiProperty({ example: '268b4711-8698-41c1-be1d-914f3f97f990' })
    postreId: string;
}