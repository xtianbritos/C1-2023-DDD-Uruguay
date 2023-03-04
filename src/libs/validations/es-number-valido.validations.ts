
/**
 *Funsión que valida que un valor sea un number, y además esté entre el 1 y el 20
 *
 * @export
 * @param {number} valor
 * @return {*}  {boolean}
 */
export function EsNumberValido(valor: number): boolean {

    if(
        (typeof valor === 'number') === false
        || valor <= 0
        || valor > 20
    ) return false;

    return true;
}