import { IsOptional, IsString, IsUUID } from "class-validator";
import { ICambiarNombreBebidaCommand } from "../../../../domain";

 export class CambiarNombreBebidaCommand implements ICambiarNombreBebidaCommand {

    @IsUUID()
    @IsOptional()
    bebidaId?: string;

    @IsString()
    nuevoNombre?: string;
}