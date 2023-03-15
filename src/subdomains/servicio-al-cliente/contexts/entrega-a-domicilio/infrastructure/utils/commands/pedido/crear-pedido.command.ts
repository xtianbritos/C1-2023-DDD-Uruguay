import { IsObject, IsString, IsUUID, IsNumber, IsOptional } from "class-validator";
import {
    IBebidaDomainEntity,
    ICrearPedidoCommand,
    IEntradaDomainEntity,
    IPlatoPrincipalDomainEntity,
    IPostreDomainEntity
} from "../../../../domain";


export class CrearPedidoCommand implements ICrearPedidoCommand{

    @IsUUID()
    @IsOptional()
    pedidoId?: string;
    
    @IsString()
    estado?: string;

    @IsNumber()
    precio?: number;

    @IsObject()
    entrada?: IEntradaDomainEntity;

    @IsObject()
    platoPrincipal?: IPlatoPrincipalDomainEntity;

    @IsObject()
    bebida?: IBebidaDomainEntity;

    @IsObject()
    postre?: IPostreDomainEntity;
}