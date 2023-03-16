import { IsOptional, IsUUID } from "class-validator";
import { IObtenerPostreCommand } from "../../../../domain";

export class ObtenerPostreCommand implements IObtenerPostreCommand{

    @IsUUID()
    @IsOptional()
    postreId?: string;
}