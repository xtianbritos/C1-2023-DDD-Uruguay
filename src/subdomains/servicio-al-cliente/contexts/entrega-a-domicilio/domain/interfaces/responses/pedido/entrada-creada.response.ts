import { EntradaDomainEntityBase } from '../../../entities';

/**
 *Interfaz para la respuesta a Crear Entrada
 *
 * @export
 * @interface IEntradaCreadoResponse
 */
export interface IEntradaCreadoResponse {
    success: boolean;
    data: EntradaDomainEntityBase | null;
}