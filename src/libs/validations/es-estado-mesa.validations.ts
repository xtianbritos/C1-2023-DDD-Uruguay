
const estadosDeMesa: string[] = [
    "En espera de ser atendida",
    "Atendida. Se le entregó un menú a cada cliente",
    "Lista para ordenar",
    "En espera de orden/es",
    "Recibió cada orden",
    "En espera de cuenta",
    "En espera de vuelto"
];

/**
 *Funsión que verifica si un estado está dentro de la lista de estados permitidos
 *
 * @export
 * @param {string} estado
 * @return {*}  {boolean}
 */
export function EsEstadoMesa(estado: string): boolean {

    const esValida: boolean = estadosDeMesa.includes(estado);

    return esValida;
}