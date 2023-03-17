import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import {
    CrearClienteUseCase,
    CrearRepartidorUseCase
} from '../../application/use-cases/ticket';

import {
    ClienteService,
    RepartidorService,
    TicketService
} from '../persistence';

import {
    CrearTicketCommand,
    CrearClienteCommand,
    CrearRepartidorCommand
} from '../utils/commands/ticket';

import {
    ClienteCreadoPublisher,
    RepartidorCreadoPublisher,
    TicketCreadoPublisher
} from '../messaging/publisher';

import { IClienteCreadoResponse, IRepartidorCreadoResponse } from '../../domain/interfaces/responses';


/**
 *Controlador del agregado Ticket
 *
 * @export
 * @class TicketController
 */
@ApiTags('ticket') 
@Controller('ticket')
export class TicketController {
    constructor(
        private readonly ticketService: TicketService,
        private readonly ticketCreadoEventPublisherBase: TicketCreadoPublisher,

        private readonly clienteService: ClienteService,
        private readonly clienteCreadoEventPublisherBase: ClienteCreadoPublisher,

        private readonly repartidorService: RepartidorService,
        private readonly repartidorCreadoEventPublisherBase: RepartidorCreadoPublisher,
    ) {}


    /**
     *Método para crear una entidad Cliente
     *
     * @param {CrearClienteCommand} command
     * @return {*}  {Promise<IClienteCreadoResponse>}
     * @memberof TicketController
     */
    @Post('/crear-cliente')
    async crearCliente(@Body() command: CrearClienteCommand): Promise<IClienteCreadoResponse> {
        const useCase = new CrearClienteUseCase(
            this.clienteService,
            this.clienteCreadoEventPublisherBase,
        );
        return await useCase.execute(command);
    }


    /**
     *Método para crear una entidad Repartidor
     *
     * @param {CrearRepartidorCommand} command
     * @return {*}  {Promise<IRepartidorCreadoResponse>}
     * @memberof TicketController
     */
    @Post('/crear-repartidor')
    async crearRepartidor(@Body() command: CrearRepartidorCommand): Promise<IRepartidorCreadoResponse> {
        const useCase = new CrearRepartidorUseCase(
            this.repartidorService,
            this.repartidorCreadoEventPublisherBase,
        );
        return await useCase.execute(command);
    }
  
}
