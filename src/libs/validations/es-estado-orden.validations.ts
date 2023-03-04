
const estadosDeOrden: string[] = ["PEDIDA", "PREPARÁNDOSE", "LISTA"];

/**
 *Funsión que verifica si un estado está dentro de la lista de estados permitidos
 *
 * @export
 * @param {string} estado
 * @return {*}  {boolean}
 */
export function EsEstadoOrden(estado: string): boolean {

    const estadoMayusculas: string = estado.toUpperCase();

    const esValida: boolean = estadosDeOrden.includes(estadoMayusculas);

    return esValida;
}