import {
    IBebidaDomainEntity,
    IEntradaDomainEntity,
    IPlatoPrincipalDomainEntity,
    IPostreDomainEntity
} from '../../../entities';

/**
 *Interfaz para el comando Obtener Pedido
 *
 * @export
 * @interface IObtenerPedidoCommand
 */
export interface IObtenerPedidoCommand {
    pedidoId?: string;
    estado?: string;
    precio?: number;
    entrada?: IEntradaDomainEntity;
    platoPrincipal?: IPlatoPrincipalDomainEntity;
    bebida?: IBebidaDomainEntity;
    postre?: IPostreDomainEntity;
    createdAt?: number | Date;
}