import { IsOptional, IsString, IsUUID } from "class-validator";
import { ICambiardireccionClienteCommand } from "../../../../domain/interfaces/commands/ticket/cambiar-direccion-cliente.command";

 export class CambiardireccionClienteCommand implements ICambiardireccionClienteCommand {

    @IsUUID()
    @IsOptional()
    clienteId?: string;

    @IsString()
    nuevaDireccion?: string;
}