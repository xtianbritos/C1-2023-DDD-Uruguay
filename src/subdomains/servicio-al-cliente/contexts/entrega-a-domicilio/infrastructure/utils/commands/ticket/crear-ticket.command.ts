import { IsUUID, IsArray, IsObject, IsOptional } from "class-validator";
import { IClienteDomainEntity, ICrearTicketCommand, IPedidoDomainEntity, IRepartidorDomainEntity } from "../../../../domain";

export class CrearTicketCommand implements ICrearTicketCommand {

    @IsUUID()
    @IsOptional()
    ticketId?: string;

    @IsArray()
    listaPedidos?: IPedidoDomainEntity[];

    @IsObject()
    cliente?: IClienteDomainEntity;

    @IsObject()
    repartidor?: IRepartidorDomainEntity;
}