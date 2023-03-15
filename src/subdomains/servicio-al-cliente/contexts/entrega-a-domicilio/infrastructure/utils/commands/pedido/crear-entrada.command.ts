import { IsOptional, IsString, IsUUID } from "class-validator";
import { ICrearEntradaCommand } from "../../../../domain";

 export class CrearEntradaCommand implements ICrearEntradaCommand{

    @IsUUID()
    @IsOptional()
    entradaId?: string;

    @IsString()
    nombre?: string;
}