import { CuentaDomainEntityBase } from "../../../entities/cuenta.domain-entity";

/**
 *Interfaz para la respuesta al comando cambiar vuelto fue entregado a cuenta
 *
 * @export
 * @interface IVueltoFueEntregadoCambiadoACuentaResponse
 */
export interface IVueltoFueEntregadoCambiadoACuentaResponse {
    success: boolean;
    data: CuentaDomainEntityBase | null;
}