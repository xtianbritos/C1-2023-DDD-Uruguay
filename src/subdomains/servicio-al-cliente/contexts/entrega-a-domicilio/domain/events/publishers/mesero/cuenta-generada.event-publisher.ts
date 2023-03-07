import { EventPublisherBase } from '../../../../../../../../libs/sofka/bases';
import { CuentaDomainEntityBase } from '../../../entities';

/**
 *Clase abstracta base para el publisher del evento cuenta generada
 *
 * @export
 * @abstract
 * @class CuentaGeneradaEventPublisherBase
 * @extends {EventPublisherBase<CuentaDomainEntityBase>}
 */
export abstract class CuentaGeneradaEventPublisherBase extends EventPublisherBase<CuentaDomainEntityBase> {
    publish(): void {
        console.log('CuentaGeneradaEventPublisherBase: Method not implemented.');
    }
}