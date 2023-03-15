import { IsOptional, IsString, IsUUID } from "class-validator";
import { ICrearClienteCommand } from "../../../../domain";

export class CrearClienteCommand implements ICrearClienteCommand {

    @IsUUID()
    @IsOptional()
    clienteId?: string;

    @IsString()
    nombre?: string;

    @IsString()
    direccion?: string;
}