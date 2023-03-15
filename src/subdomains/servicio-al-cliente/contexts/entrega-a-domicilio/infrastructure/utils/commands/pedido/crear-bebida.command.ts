import { IsOptional, IsString, IsUUID } from "class-validator";
import { ICrearBebidaCommand } from "../../../../domain";

 export class CrearBebidaCommand implements ICrearBebidaCommand {

    @IsUUID()
    @IsOptional()
    bebidaId?: string;

    @IsString()
    nombre?: string;

    @IsString()
    tamanio?: string;
}