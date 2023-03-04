
/**
 *Funsión que valida que una cadena de caracteres tenga la estructura de un nombre
 *
 * @export
 * @param {string} valor
 * @return {*}  {boolean}
 */
export function EsNombre(valor: string): boolean {

    const regex =/ ^ [a-zA-Z] + [a-zA-Z] + $ /;

    const matches = valor.match(regex);

    return matches != null ? true : false;
}
