import { EventPublisherBase } from '../../../../../../../../libs/sofka/bases';
import { CuentaDomainEntityBase } from '../../../entities';

/**
 *Clase abstracta base para el publisher del evento vuelto fue entregado cambiado a cuenta
 *
 * @export
 * @abstract
 * @class VueltoFueEntregadoCambiadoACuentaEventPublisherBase
 * @extends {EventPublisherBase<CuentaDomainEntityBase>}
 */
export abstract class VueltoFueEntregadoCambiadoACuentaEventPublisherBase extends EventPublisherBase<CuentaDomainEntityBase> {
    publish(): void {
        console.log('VueltoFueEntregadoCambiadoACuentaEventPublisherBase: Method not implemented.');
    }
}