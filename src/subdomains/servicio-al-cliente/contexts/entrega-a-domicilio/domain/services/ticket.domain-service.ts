
/**
 *Servicio para los comandos del agregado Ticket
 *
 * @export
 * @interface ITicketDomainService
 * @template TicketAggregate
 */
export interface ITicketDomainService<TicketAggregate> {
    crearTicket(ticket: TicketAggregate): Promise<TicketAggregate>;
    agregarPedido(ticketId: string, pedidoId: string): Promise<string>;
    borrarPedido(tiketId: string, pedidoId: string): Promise<string>;
    crearCliente(cliente: ClienteDomainEntityBase): Promise<ClienteDomainEntityBase>;
    cambiarNombreCliente(clienteId: string, nuevoNombre: string): Promise<string>;
    cambiarDireccionCliente(clienteId: string, nuevaDireccion: string): Promise<string>;
    crearRepartidor(repartidor: RepartidorDomainEntityBase): Promise<RepartidorDomainEntityBase>;
    cambiarNombreRepartidor(repartidorId: string, nuevoNombre: string): Promise<string>;
    cambiarVehiculoRepartidor(repartidorId: string, nuevoVehiculo: string): Promise<string>;
}