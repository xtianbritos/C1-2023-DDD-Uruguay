import { CuentaIdValueObject, FueEntregadaValueObject, PagoFueRecibidoValueObject, VueltoFueEntregadoValueObject } from "../value-objects/mesero/cuenta";
import { ICuentaDomainEntity } from "./interfaces";

import { v4 as uuid } from 'uuid';

/**
 *Clase base de entidad Cuenta
 *
 * @export
 * @class CuentaDomainEntityBase
 * @implements {ICuentaDomainEntity}
 */
export class CuentaDomainEntityBase implements ICuentaDomainEntity {
    cuentaId?: string | CuentaIdValueObject;
    pagoFueRecibido?: boolean | PagoFueRecibidoValueObject;
    vueltoFueEntregado?: boolean | VueltoFueEntregadoValueObject;
    cuentaFueEntregada?: boolean | FueEntregadaValueObject;
    createdAt?: number | Date;

    constructor(_data?: ICuentaDomainEntity) {
        if(_data.cuentaId) this.cuentaId = _data.cuentaId;
        else this.cuentaId = uuid();

        if(_data.pagoFueRecibido) this.pagoFueRecibido = _data.pagoFueRecibido;

        if(_data.vueltoFueEntregado) this.vueltoFueEntregado = _data.vueltoFueEntregado;

        if(_data.cuentaFueEntregada) this.cuentaFueEntregada = _data.cuentaFueEntregada;

        this.createdAt = new Date();
    }
}