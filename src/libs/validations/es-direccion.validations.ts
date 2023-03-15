
/**
 *Funsión que valida que una cadena de caracteres tenga la estructura de una dirección
 *
 * @export
 * @param {string} valor
 * @return {*}  {boolean}
 */
 export function EsDireccion(valor: string): boolean {

    const regex = 
    /^([A-Za-zÑñÁáÉéÍíÓóÚú0-9]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú0-9]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú0-9]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú0-9]+))*$/;

    const matches = valor.match(regex);

    return matches != null ? true : false;
}