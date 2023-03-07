import { ITicketDomainService } from "../services";
import { TicketCreadoEventPublisherBase } from '../events/publishers/ticket/ticket-creado.event-publisher';
import { ClienteDomainEntityBase, RepartidorDomainEntityBase, TicketDomainEntityBase } from "../entities";
import { AggregateRootException } from '../../../../../../libs/sofka/exceptions/aggregate-root.exception';

export class TicketAggregate
    implements ITicketDomainService {

        private readonly ticketService?: ITicketDomainService;
        private readonly ticketCreadoEventPublisherBase?: TicketCreadoEventPublisherBase;

        constructor(
            {
                ticketService,
                ticketCreadoEventPublisherBase
            }: {
                ticketService?: ITicketDomainService,
                ticketCreadoEventPublisherBase?: TicketCreadoEventPublisherBase
            }
        ) {
            this.ticketService = ticketService,
            this.ticketCreadoEventPublisherBase = ticketCreadoEventPublisherBase
        }

        async crearTicket(ticket: TicketDomainEntityBase): Promise<TicketDomainEntityBase | TicketDomainEntityBase[]> {
            if(this.ticketService && this.ticketCreadoEventPublisherBase) {
                const result = await this.ticketService.crearTicket(ticket);
                this.ticketCreadoEventPublisherBase.response = result;
                this.ticketCreadoEventPublisherBase.publish();
                return this.ticketCreadoEventPublisherBase.response;
            }
            throw new AggregateRootException(
                'TicketAggregate "TicketService" y/o "ticketCreadoEventPublisherBase" no están definidos'
            )
        }

        agregarPedido(ticketId: string, pedidoId: string): Promise<PedidoDomainEntityBase> {
            throw new Error('Method not implemented.');
        }

        borrarPedido(tiketId: string, pedidoId: string): Promise<PedidoDomainEntityBase> {
            throw new Error('Method not implemented.');
        }

        crearCliente(cliente: ClienteDomainEntityBase): Promise<ClienteDomainEntityBase> {
            throw new Error('Method not implemented.');
        }

        cambiarNombreCliente(clienteId: string, nuevoNombre: string): Promise<string> {
            throw new Error('Method not implemented.');
        }

        cambiarDireccionCliente(clienteId: string, nuevaDireccion: string): Promise<string> {
            throw new Error('Method not implemented.');
        }

        crearRepartidor(repartidor: RepartidorDomainEntityBase): Promise<RepartidorDomainEntityBase> {
            throw new Error('Method not implemented.');
        }

        cambiarNombreRepartidor(repartidorId: string, nuevoNombre: string): Promise<string> {
            throw new Error('Method not implemented.');
        }

        cambiarVehiculoRepartidor(repartidorId: string, nuevoVehiculo: string): Promise<string> {
            throw new Error('Method not implemented.');
        }
        
    }