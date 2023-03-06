import { CuentaIdValueObject, FueEntregadaValueObject, PagoFueRecibidoValueObject, VueltoFueEntregadoValueObject } from '../../value-objects/mesero/cuenta';

export interface ICuentaDomainEntity {
    cuentaId?: string | CuentaIdValueObject;
    pagoFueRecibido?: boolean | PagoFueRecibidoValueObject;
    vueltoFueEntregado?: boolean | VueltoFueEntregadoValueObject;
    cuentaFueEntregada?: boolean | FueEntregadaValueObject;
    createdAt?: number | Date;
}