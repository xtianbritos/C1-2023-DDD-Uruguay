import { CuentaIdValueObject, FueEntregadaValueObject, PagoFueRecibidoValueObject, VueltoFueEntregadoValueObject } from "../../../../value-objects/mesero/cuenta";

/**
 *Interfaz para el comando crear centa
 *
 * @export
 * @interface ICrearCuentaCommand
 */
export interface ICrearCuentaCommand {
    cuentaId?: string;
    pagoFueRecibido?: boolean;
    vueltoFueEntregado?: boolean;
    cuentaFueEntregada?: boolean;
    createdAt?: number | Date;
}