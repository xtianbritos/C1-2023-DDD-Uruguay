
/**
 *Servicio para los comandos de la entidad Postre
 *
 * @export
 * @interface IPostreDomainService
 * @template PostreDomainEntityBase
 */
export interface IPostreDomainService<PostreDomainEntityBase> {
    crearPostre(postre: PostreDomainEntityBase): Promise<PostreDomainEntityBase>;
    obtenerPostre(postreId: string): Promise<PostreDomainEntityBase>;
    cambiarNombre(postreId: string, nuevoNombre: string): Promise<string>;
    cambiarTamaño(postreId: string, nuevoTamaño: string): Promise<string>;
    cambiarEsParaVeganos(postreId: string, nuevoEstado: boolean): Promise<boolean>;
}