import { IsOptional, IsString, IsUUID } from "class-validator";
import { IAgregarPedidoCommand } from "../../../../domain/interfaces/commands/ticket/agregar-pedido.command";


 export class AgregarPedidoCommand implements IAgregarPedidoCommand {

    @IsUUID()
    @IsOptional()
    ticketId?: string;

    @IsString()
    pedidoId?: string;
}