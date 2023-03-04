
const estadosDeOrden: string[] = ["Pedida", "Preparándose", "Lista"];

/**
 *Funsión que verifica si un estado está dentro de la lista de estados permitidos
 *
 * @export
 * @param {string} estado
 * @return {*}  {boolean}
 */
export function EsEstadoOrden(estado: string): boolean {

    const esValida: boolean = estadosDeOrden.includes(estado);

    return esValida;
}