import { EventPublisherBase } from '../../../../../../../../libs/sofka/bases';
import { CuentaDomainEntityBase } from '../../../entities';

/**
 *Clase abstracta base para el publisher del evento fue entregada cambiado a cuenta
 *
 * @export
 * @abstract
 * @class FueEntregadaCambiadoACuentaEventPublisherBase
 * @extends {EventPublisherBase<CuentaDomainEntityBase>}
 */
export abstract class FueEntregadaCambiadoACuentaEventPublisherBase extends EventPublisherBase<CuentaDomainEntityBase> {
    publish(): void {
        console.log('FueEntregadaCambiadoACuentaEventPublisherBase: Method not implemented.');
    }
}