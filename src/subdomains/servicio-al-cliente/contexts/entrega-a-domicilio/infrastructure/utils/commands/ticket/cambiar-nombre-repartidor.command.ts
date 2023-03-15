import { IsOptional, IsString, IsUUID } from "class-validator";
import { ICambiarNombreRepartidorCommand } from "../../../../domain/interfaces/commands/ticket/cambiar-nombre-repartidor.command";

 export class CambiarNombreRepartidorCommand implements ICambiarNombreRepartidorCommand {

    @IsUUID()
    @IsOptional()
    repartidorId?: string;

    @IsString()
    nuevoNombre?: string;
}