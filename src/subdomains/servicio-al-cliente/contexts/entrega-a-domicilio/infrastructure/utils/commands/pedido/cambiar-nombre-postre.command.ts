import { IsOptional, IsString, IsUUID } from "class-validator";
import { ICambiarNombrePostreCommand } from "../../../../domain";

 export class CambiarNombrePostreCommand implements ICambiarNombrePostreCommand{

    @IsUUID()
    @IsOptional()
    postreId?: string;

    @IsString()
    nuevoNombre?: string;
}