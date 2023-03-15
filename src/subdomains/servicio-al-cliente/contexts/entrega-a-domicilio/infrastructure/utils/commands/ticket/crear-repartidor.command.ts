import { IsOptional, IsString, IsUUID } from "class-validator";
import { ICrearRepartidorCommand } from "../../../../domain";

export class CrearRepartidorCommand implements ICrearRepartidorCommand {

    @IsUUID()
    @IsOptional()
    repartidorId?: string;

    @IsString()
    nombre?: string;

    @IsString()
    vehiculo?: string;
}