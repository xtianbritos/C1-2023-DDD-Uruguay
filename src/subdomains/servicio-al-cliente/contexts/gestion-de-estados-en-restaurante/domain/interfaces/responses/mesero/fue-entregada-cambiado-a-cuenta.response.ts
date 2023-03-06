import { CuentaDomainEntityBase } from "../../../entities/cuenta.domain-entity";

/**
 *Interfaz para la respuesta al comando cambiar cuenta fue entregada
 *
 * @export
 * @interface IFueEntregadaCambiadoACuentaResponse
 */
export interface IFueEntregadaCambiadoACuentaResponse {
    success: boolean;
    data: CuentaDomainEntityBase | null;
}