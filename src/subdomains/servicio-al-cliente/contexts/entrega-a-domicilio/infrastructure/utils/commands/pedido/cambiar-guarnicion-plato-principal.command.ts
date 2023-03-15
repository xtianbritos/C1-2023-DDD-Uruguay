import { IsOptional, IsString, IsUUID } from "class-validator";
import { ICambiarGuarnicionPlatoPrincipalCommand } from "../../../../domain/interfaces/commands/pedido/cambiar-guarnicion-plato-principal.command";

 export class CambiarGuarnicionPlatoPrincipalCommand implements ICambiarGuarnicionPlatoPrincipalCommand{

    @IsUUID()
    @IsOptional()
    platoPrincipalId?: string;

    @IsString()
    nuevaGuarnicion?: string;
}