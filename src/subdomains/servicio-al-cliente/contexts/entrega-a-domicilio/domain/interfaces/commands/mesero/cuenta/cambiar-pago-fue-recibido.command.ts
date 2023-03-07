
/**
 *Interfaz para el comando cambiar pago fue recibido
 *
 * @export
 * @interface ICambiarPagoFueRecibidoCommand
 */
export interface ICambiarPagoFueRecibidoCommand {
    cuentaId?: string;
    pagoFueRecibido?: boolean;
}