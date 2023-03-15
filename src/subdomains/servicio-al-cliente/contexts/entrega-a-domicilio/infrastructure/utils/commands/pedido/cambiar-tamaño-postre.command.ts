import { IsOptional, IsString, IsUUID } from "class-validator";
import { ICambiarTamanioPostreCommand } from "../../../../domain/interfaces/commands/pedido";

 export class CambiarTamanioPostreCommand implements ICambiarTamanioPostreCommand {

    @IsUUID()
    @IsOptional()
    postreId?: string;

    @IsString()
    nuevoTamanio?: string;
}