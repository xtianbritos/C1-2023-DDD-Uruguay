import { ICambiarEstadoPedidoCommand } from "../../../../domain";
import { IsOptional, IsString, IsUUID } from 'class-validator';

 export class CambiarEstadoPedidoCommand implements ICambiarEstadoPedidoCommand {

    @IsUUID()
    @IsOptional()
    pedidoId?: string;

    @IsString()
    nuevoEstado?: string;
}