
/**
 *Funsión que valida que una cadena de caracteres tenga la estructura de una dirección
 *
 * @export
 * @param {string} valor
 * @return {*}  {boolean}
 */
 export function EsDireccion(valor: string): boolean {

    const regex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+\d*[a-zA-ZñÑáéíóúÁÉÍÓÚ\d\s]*$/;

    return regex.test(valor);
}