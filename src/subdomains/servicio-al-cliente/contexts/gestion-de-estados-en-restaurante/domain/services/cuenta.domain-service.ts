import { CuentaDomainEntityBase } from '../entities/cuenta.domain-entity';
import { CuentaIdValueObject } from '../value-objects/mesero/cuenta/cuenta-id/cuenta-id.value-object';

/**
 *Servicio con los métodos de la entidad Cuenta
 *
 * @export
 * @interface ICuentaDomainService
 * @template CuentaDomainEntityBase
 */
export interface ICuentaDomainService<CuentaDomainEntityBase> {
    crearCuenta(cuenta: CuentaDomainEntityBase): Promise<CuentaDomainEntityBase>;
    cambiarPagoFueRecibido(cuentaId: string, nuevoValor: boolean): Promise<boolean>;
    cambiarVueltoFueEntregado(cuentaId: string, nuevoValor: boolean): Promise<boolean>;
    cambiarFueEntregada(cuentaId: string, nuevoValor: boolean): Promise<boolean>;
}