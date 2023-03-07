import { NombreValueObject, PostreIdValueObject, TamanioValueObject } from '../../../value-objects/pedido/postre';

/**
 *Interfaz para la entidad Postre
 *
 * @export
 * @class IPostreDomainEntity
 */
 export interface IPostreDomainEntity {
    postreId?: string | PostreIdValueObject;
    nombre?: string | NombreValueObject;
    tamanio?: string | TamanioValueObject;
    createdAt?: number | Date;
}