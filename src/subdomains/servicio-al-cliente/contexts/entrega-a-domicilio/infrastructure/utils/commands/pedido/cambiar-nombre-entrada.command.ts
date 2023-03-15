import { IsOptional, IsString, IsUUID } from "class-validator";
import { ICambiarNombreEntradaCommand } from "../../../../domain/interfaces/commands/pedido/cambiar-nombre-entrada.command";

 export class CambiarNombreEntradaCommand implements ICambiarNombreEntradaCommand {

    @IsUUID()
    @IsOptional()
    entradaId?: string;

    @IsString()
    nuevoNombre?: string;
}