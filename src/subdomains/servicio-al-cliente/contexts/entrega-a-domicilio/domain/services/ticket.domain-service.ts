import { ClienteDomainEntityBase, RepartidorDomainEntityBase, TicketDomainEntityBase } from "../entities/ticket";

/**
 *Servicio para los comandos del agregado Ticket
 *
 * @export
 * @interface ITicketDomainService
 * @template TicketAggregate
 */
export interface ITicketDomainService<TicketDomainEntityBase> {
    crearTicket(ticket: TicketDomainEntityBase): Promise<TicketDomainEntityBase>;
    agregarPedido(ticketId: string, pedidoId: string): Promise<PedidoDomainEntityBase>;
    borrarPedido(tiketId: string, pedidoId: string): Promise<PedidoDomainEntityBase>;
    crearCliente(cliente: ClienteDomainEntityBase): Promise<ClienteDomainEntityBase>;
    cambiarNombreCliente(clienteId: string, nuevoNombre: string): Promise<string>;
    cambiarDireccionCliente(clienteId: string, nuevaDireccion: string): Promise<string>;
    crearRepartidor(repartidor: RepartidorDomainEntityBase): Promise<RepartidorDomainEntityBase>;
    cambiarNombreRepartidor(repartidorId: string, nuevoNombre: string): Promise<string>;
    cambiarVehiculoRepartidor(repartidorId: string, nuevoVehiculo: string): Promise<string>;
}