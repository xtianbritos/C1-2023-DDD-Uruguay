
/**
 *Funsión que valida que una dato sea booleano
 *
 * @export
 * @param {boolean} valor
 * @return {*}  {boolean}
 */
export function EsBoolean(valor: any): boolean {

    return typeof valor === 'boolean' ? true : false;
}
