import { IClienteDomainService, IRepartidorDomainService, ITicketDomainService } from "../services";
import { TicketCreadoEventPublisherBase } from '../events/publishers/ticket/ticket-creado.event-publisher';
import { ClienteDomainEntityBase, RepartidorDomainEntityBase, TicketDomainEntityBase } from "../entities";
import { AggregateRootException } from '../../../../../../libs/sofka/exceptions/aggregate-root.exception';
import { ClienteCreadoEventPublisherBase, RepartidorCreadoEventPublisherBase, DireccionClienteCambiadaEventPublisherBase } from "../events/publishers/ticket";

export class TicketAggregate
    implements ITicketDomainService {

        private readonly ticketService?: ITicketDomainService<TicketDomainEntityBase>;
        private readonly clienteService?: IClienteDomainService<ClienteDomainEntityBase>;
        private readonly repartidorService?: IRepartidorDomainService<RepartidorDomainEntityBase>;
        private readonly ticketCreadoEventPublisherBase?: TicketCreadoEventPublisherBase;
        private readonly clienteCreadoEventPublisherBase?: ClienteCreadoEventPublisherBase;
        private readonly repartidorCreadoEventPublisherBase?: RepartidorCreadoEventPublisherBase;
        private readonly direccionClienteCambiadaEventPublisherBase?: DireccionClienteCambiadaEventPublisherBase;

        constructor(
            {
                ticketService,
                clienteService,
                repartidorService,
                ticketCreadoEventPublisherBase,
                clienteCreadoEventPublisherBase,
                repartidorCreadoEventPublisherBase,
                direccionClienteCambiadaEventPublisherBase,
            }: {
                ticketService?: ITicketDomainService<TicketDomainEntityBase>,
                clienteService?: IClienteDomainService<ClienteDomainEntityBase>,
                repartidorService?: IRepartidorDomainService<RepartidorDomainEntityBase>,
                ticketCreadoEventPublisherBase?: TicketCreadoEventPublisherBase,
                clienteCreadoEventPublisherBase?: ClienteCreadoEventPublisherBase,
                repartidorCreadoEventPublisherBase?: RepartidorCreadoEventPublisherBase,
                direccionClienteCambiadaEventPublisherBase?: DireccionClienteCambiadaEventPublisherBase,
            }
        ) {
            this.ticketService = ticketService,
            this.clienteService = clienteService,
            this.repartidorService = repartidorService,
            this.ticketCreadoEventPublisherBase = ticketCreadoEventPublisherBase,
            this.clienteCreadoEventPublisherBase = clienteCreadoEventPublisherBase,
            this.repartidorCreadoEventPublisherBase = repartidorCreadoEventPublisherBase,
            this.direccionClienteCambiadaEventPublisherBase = direccionClienteCambiadaEventPublisherBase,
        }

        async crearTicket(ticket: TicketDomainEntityBase): Promise<TicketDomainEntityBase> {
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

        async crearCliente(cliente: ClienteDomainEntityBase): Promise<ClienteDomainEntityBase> {
            if(this.clienteService && this.clienteCreadoEventPublisherBase) {
                const result = await this.clienteService.crearCliente(cliente);
                this.clienteCreadoEventPublisherBase.response = result;
                this.clienteCreadoEventPublisherBase.publish();
                return this.clienteCreadoEventPublisherBase.response;
            }
            throw new AggregateRootException(
                'TicketAggregate "clienteService" y/o "clienteCreadoEventPublisherBase" no están definidos'
            )
        }

        cambiarNombreCliente(clienteId: string, nuevoNombre: string): Promise<string> {
            throw new Error('Method not implemented.');
        }

        async cambiarDireccionCliente(clienteId: string, nuevaDireccion: string): Promise<string> {
            if(this.clienteService && this.direccionClienteCambiadaEventPublisherBase) {
                const result = await this.clienteService.cambiarDireccion(clienteId, nuevaDireccion);
                this.direccionClienteCambiadaEventPublisherBase.response = result;
                this.direccionClienteCambiadaEventPublisherBase.publish();
                return this.direccionClienteCambiadaEventPublisherBase.response;
            }
            throw new AggregateRootException(
                'TicketAggregate "ClienteService" y/o "direccionClienteCambiadaEventPublisherBase" no están definidos'
            )
        }

        async crearRepartidor(repartidor: RepartidorDomainEntityBase): Promise<RepartidorDomainEntityBase> {
            if(this.repartidorService && this.repartidorCreadoEventPublisherBase) {
                const result = await this.repartidorService.crearRepartidor(repartidor);
                this.repartidorCreadoEventPublisherBase.response = result;
                this.repartidorCreadoEventPublisherBase.publish();
                return this.repartidorCreadoEventPublisherBase.response;
            }
            throw new AggregateRootException(
                'TicketAggregate "repartidorService" y/o "repartidorCreadoEventPublisherBase" no están definidos'
            )
        }

        cambiarNombreRepartidor(repartidorId: string, nuevoNombre: string): Promise<string> {
            throw new Error('Method not implemented.');
        }

        cambiarVehiculoRepartidor(repartidorId: string, nuevoVehiculo: string): Promise<string> {
            throw new Error('Method not implemented.');
        }
        
    }