import { CuentaDomainEntityBase } from "../entities";
import { MesaAggregate, MeseroAggregate } from '../aggregates';

/**
 *Servicio con los comandos del agregado Mesero
 *
 * @export
 * @interface IMeseroDomainService
 * @template MeseroAggregate
 */
export interface IMeseroDomainService<MeseroAggregate> {
    crearMesero(mesero: MeseroAggregate): Promise<MeseroAggregate>;
    cambiarNombre(meseroId: string, nuevoNombre: string): Promise<string>;
    generarCuenta(cuenta: CuentaDomainEntityBase): Promise<CuentaDomainEntityBase>;
    cambiarPagoFueRecibidoACuenta(cuentaId: string, nuevoValor: boolean): Promise<boolean>;
    cambiarVueltoFueEntregadoACuenta(cuentaId: string, nuevoValor: boolean): Promise<boolean>;
    cambiarFueEntregadaACuenta(cuentaId: string, nuevoValor: boolean): Promise<boolean>;
    borrarCuenta(cuentaId: string): Promise<void>;
    atenderMesa(mesaId: string): Promise<MesaAggregate>;
    cambiarEstadoAMesa(mesaId: string, nuevoEsdato: string): Promise<MesaAggregate>;
    borrarMesa(mesaId: string): Promise<void>;
}