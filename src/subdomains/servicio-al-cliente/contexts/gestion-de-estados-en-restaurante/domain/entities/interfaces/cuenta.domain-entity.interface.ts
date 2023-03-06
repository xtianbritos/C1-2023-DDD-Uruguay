import { CuentaIdValueObject, FueEntregadaValueObject, PagoFueRecibidoValueObject, VueltoFueEntregadoValueObject } from '../../value-objects/mesero/cuenta';

/**
 *Interfaz para la entidad Cuenta
 *
 * @export
 * @interface ICuentaDomainEntity
 */
export interface ICuentaDomainEntity {
    cuentaId?: string | CuentaIdValueObject;
    pagoFueRecibido?: boolean | PagoFueRecibidoValueObject;
    vueltoFueEntregado?: boolean | VueltoFueEntregadoValueObject;
    cuentaFueEntregada?: boolean | FueEntregadaValueObject;
    createdAt?: number | Date;
}