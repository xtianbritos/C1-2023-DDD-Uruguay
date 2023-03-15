import { IsOptional, IsString, IsUUID } from "class-validator";
import { IBorrarPedidoCommand } from "../../../../domain/interfaces/commands/ticket/borrar-pedido.command";

 export class BorrarPedidoCommand implements IBorrarPedidoCommand {

    @IsUUID()
    @IsOptional()
    ticketId?: string;

    @IsString()
    pedidoId?: string;
}