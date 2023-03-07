import { EventPublisherBase } from '../../../../../../../../libs/sofka/bases';
import { CuentaDomainEntityBase } from '../../../entities';

/**
 *Clase abstracta base para el publisher del evento pago fue recibido cambiado a cuenta
 *
 * @export
 * @abstract
 * @class PagoFueRecibidoCambiadoACuentaEventPublisherBase
 * @extends {EventPublisherBase<CuentaDomainEntityBase>}
 */
export abstract class PagoFueRecibidoCambiadoACuentaEventPublisherBase extends EventPublisherBase<CuentaDomainEntityBase> {
    publish(): void {
        console.log('PagoFueRecibidoCambiadoACuentaEventPublisherBase: Method not implemented.');
    }
}