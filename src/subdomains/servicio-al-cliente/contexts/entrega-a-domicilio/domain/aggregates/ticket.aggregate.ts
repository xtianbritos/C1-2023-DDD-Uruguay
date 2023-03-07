import { ITicketDomainService } from "../services";
import { TicketCreadoEventPublisherBase } from '../events/publishers/ticket/ticket-creado.event-publisher';
import { ClienteDomainEntityBase, RepartidorDomainEntityBase, TicketDomainEntityBase } from "../entities";
import { AggregateRootException } from '../../../../../../libs/sofka/exceptions/aggregate-root.exception';
import { ClienteCreadoEventPublisherBase, RepartidorCreadoEventPublisherBase } from "../events/publishers/ticket";

export class TicketAggregate
    implements ITicketDomainService {

        private readonly ticketService?: ITicketDomainService;
        private readonly ticketCreadoEventPublisherBase?: TicketCreadoEventPublisherBase;
        private readonly clienteCreadoEventPublisherBase?: ClienteCreadoEventPublisherBase;
        private readonly repartidorCreadoEventPublisherBase?: RepartidorCreadoEventPublisherBase;

        constructor(
            {
                ticketService,
                ticketCreadoEventPublisherBase,
                clienteCreadoEventPublisherBase,
                repartidorCreadoEventPublisherBase,
            }: {
                ticketService?: ITicketDomainService,
                ticketCreadoEventPublisherBase?: TicketCreadoEventPublisherBase,
                clienteCreadoEventPublisherBase?: ClienteCreadoEventPublisherBase,
                repartidorCreadoEventPublisherBase?: RepartidorCreadoEventPublisherBase
            }
        ) {
            this.ticketService = ticketService,
            this.ticketCreadoEventPublisherBase = ticketCreadoEventPublisherBase,
            this.clienteCreadoEventPublisherBase = clienteCreadoEventPublisherBase,
            this.repartidorCreadoEventPublisherBase = repartidorCreadoEventPublisherBase,
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

        async crearCliente(cliente: ClienteDomainEntityBase): Promise<ClienteDomainEntityBase | ClienteDomainEntityBase[]> {
            if(this.ticketService && this.clienteCreadoEventPublisherBase) {
                const result = await this.ticketService.crearCliente(cliente);
                this.clienteCreadoEventPublisherBase.response = result;
                this.clienteCreadoEventPublisherBase.publish();
                return this.clienteCreadoEventPublisherBase.response;
            }
            throw new AggregateRootException(
                'TicketAggregate "TicketService" y/o "clienteCreadoEventPublisherBase" no están definidos'
            )
        }

        cambiarNombreCliente(clienteId: string, nuevoNombre: string): Promise<string> {
            throw new Error('Method not implemented.');
        }

        cambiarDireccionCliente(clienteId: string, nuevaDireccion: string): Promise<string> {
            throw new Error('Method not implemented.');
        }

        async crearRepartidor(repartidor: RepartidorDomainEntityBase): Promise<RepartidorDomainEntityBase | RepartidorDomainEntityBase[]> {
            if(this.ticketService && this.repartidorCreadoEventPublisherBase) {
                const result = await this.ticketService.crearRepartidor(repartidor);
                this.repartidorCreadoEventPublisherBase.response = result;
                this.repartidorCreadoEventPublisherBase.publish();
                return this.repartidorCreadoEventPublisherBase.response;
            }
            throw new AggregateRootException(
                'TicketAggregate "TicketService" y/o "repartidorCreadoEventPublisherBase" no están definidos'
            )
        }

        cambiarNombreRepartidor(repartidorId: string, nuevoNombre: string): Promise<string> {
            throw new Error('Method not implemented.');
        }

        cambiarVehiculoRepartidor(repartidorId: string, nuevoVehiculo: string): Promise<string> {
            throw new Error('Method not implemented.');
        }
        
    }