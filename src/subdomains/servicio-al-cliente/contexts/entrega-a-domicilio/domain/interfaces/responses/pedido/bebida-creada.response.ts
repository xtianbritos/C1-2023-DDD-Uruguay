import { BebidaDomainEntityBase } from '../../../entities';

/**
 *Interfaz para la respuesta a Crear Bebida
 *
 * @export
 * @interface IBebidaCreadoResponse
 */
export interface IBebidaCreadoResponse {
    success: boolean;
    data: BebidaDomainEntityBase | null;
}