import { IsBoolean, IsOptional, IsString, IsUUID } from "class-validator";
import { ICrearPostreCommand } from "../../../../domain";

export class CrearPostreCommand implements ICrearPostreCommand {

    @IsUUID()
    @IsOptional()
    postreId?: string;

    @IsString()
    nombre?: string;

    @IsString()
    tamanio?: string;

    @IsBoolean()
    esParaVeganos?: boolean;
}