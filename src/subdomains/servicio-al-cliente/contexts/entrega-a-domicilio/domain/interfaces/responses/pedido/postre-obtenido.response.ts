import { PostreDomainEntityBase} from '../../../entities';

/**
 *Interfaz para la respuesta a Obtener Postre
 *
 * @export
 * @interface IPostreObtenidoResponse
 */
export interface IPostreObtenidoResponse {
    success: boolean;
    data: PostreDomainEntityBase | null;
}