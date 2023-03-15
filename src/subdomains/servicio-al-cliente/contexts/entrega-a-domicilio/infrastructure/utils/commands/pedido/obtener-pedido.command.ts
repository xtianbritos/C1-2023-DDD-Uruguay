import { IsOptional, IsUUID } from "class-validator";
import { IObtenerPedidoCommand } from "../../../../domain";

export class ObtenerPedidoCommand implements IObtenerPedidoCommand {

    @IsUUID()
    @IsOptional()
    pedidoId?: string;
}