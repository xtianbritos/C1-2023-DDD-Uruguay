import { IsNumber, IsOptional, IsUUID } from "class-validator";
import { ICambiarPrecioPedidoCommand } from "../../../../domain";

 export class CambiarPrecioPedidoCommand implements ICambiarPrecioPedidoCommand {

    @IsUUID()
    @IsOptional()
    pedidoId?: string;

    @IsNumber()
    nuevoPrecio?: number;
}