import { CuentaDomainEntityBase } from "../../../entities/cuenta.domain-entity";

/**
 *Interfaz para la respuesta al comando cambiar pago fue recibido a cuenta
 *
 * @export
 * @interface IPagoFueRecibidoCambiadoACuentaResponse
 */
export interface IPagoFueRecibidoCambiadoACuentaResponse {
    success: boolean;
    data: CuentaDomainEntityBase | null;
}