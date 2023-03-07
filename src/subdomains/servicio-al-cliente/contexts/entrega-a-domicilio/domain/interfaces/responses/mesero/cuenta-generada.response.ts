import { CuentaDomainEntityBase } from '../../../entities/cuenta.domain-entity';

/**
 *Interfaz para la respuesta al comando generar cuenta
 *
 * @export
 * @interface ICuentaGeneradaResponse
 */
export interface ICuentaGeneradaResponse {
    success: boolean;
    data: CuentaDomainEntityBase | null;
}