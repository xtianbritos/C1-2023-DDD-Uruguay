import { Body, Controller, Get, Post, Param, Patch } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import {
    CrearPedidoUseCase,
    CrearBebidaUseCase,
    CrearEntradaUseCase,
    CrearPlatoPrincipalUseCase,
    CrearPostreUseCase,
    ObtenerPedidoUseCase,
    ObtenerBebidaUseCase,
    CambiarEstadoPedidoUseCase,
    CambiarPrecioPedidoUseCase,
    CambiarNombreBebidaUseCase,
    CambiarTamanioBebidaUseCase,
    ObtenerPostreUseCase,
    CambiarTamanioPostreUseCase,
    CambiarPostreEsParaVeganosUseCase
} from '../../application';

import {
    BebidaService,
    EntradaService,
    PedidoService,
    PlatoPrincipalService,
    PostreService
} from '../persistence';

import {
    CrearPedidoCommand,
    CrearBebidaCommand,
    CrearEntradaCommand,
    CrearPlatoPrincipalCommand,
    CrearPostreCommand,
    ObtenerPedidoCommand,
    ObtenerBebidaCommand,
    CambiarEstadoPedidoCommand,
    CambiarPrecioPedidoCommand,
    CambiarNombreBebidaCommand,
    CambiarTamanioBebidaCommand,
    CambiarTamanioPostreCommand,
    ObtenerPostreCommand,
    CambiarPostreEsParaVeganosCommand,
} from '../utils/commands/pedido';

import {
    BebidaCreadaPublisher,
    EntradaCreadaPublisher,
    PedidoCreadoPublisher,
    PlatoPrincipalCreadoPublisher,
    PostreCreadoPublisher,
    PedidoObtenidoPublisher,
    BebidaObtenidaPublisher,
    EstadoPedidoCambiadoPublisher,
    PrecioPedidoCambiadoPublisher,
    NombreBebidaCambiadoPublisher,
    TamanioBebidaCambiadoPublisher,
    TamanioPostreCambiadoPublisher,
    PostreObtenidoPublisher,
    PostreEsParaVeganosCambiadoPublisher
} from '../messaging/publisher';

import {
    IBebidaCreadaResponse,
    IBebidaObtenidaResponse,
    IEntradaCreadaResponse,
    IEstadoPedidoCambiadoResponse,
    INombreBebidaCambiadoResponse,
    IPedidoObtenidoResponse,
    IPlatoPrincipalCreadoResponse,
    IPostreCreadoResponse,
    IPostreEsParaVeganosCambiadoResponse,
    IPostreObtenidoResponse,
    IPrecioPedidoCambiadoResponse,
    ITamanioBebidaCambiadoResponse,
    ITamanioPostreCambiadoResponse
} from '../../domain/interfaces/responses';


/**
 *Controlador del agregado Pedido
 *
 * @export
 * @class PedidoController
 */
@ApiTags('pedido') 
@Controller('pedido')
export class PedidoController {
    constructor(
        private readonly pedidoService: PedidoService,
        private readonly pedidoCreadoEventPublisherBase: PedidoCreadoPublisher,
        private readonly pedidoObtenidoEventPublisherBase: PedidoObtenidoPublisher,
        private readonly estadoPedidoCambiadoEventPublisherBase: EstadoPedidoCambiadoPublisher,
        private readonly precioPedidoCambiadoEventPublisherBase: PrecioPedidoCambiadoPublisher,

        private readonly entradaService: EntradaService,
        private readonly entradaCreadaEventPublisherBase: EntradaCreadaPublisher,

        private readonly platoPrincipalService: PlatoPrincipalService,
        private readonly platoPrincipalCreadoEventPublisherBase: PlatoPrincipalCreadoPublisher,

        private readonly bebidaService: BebidaService,
        private readonly bebidaCreadaEventPublisherBase: BebidaCreadaPublisher,
        private readonly bebidaObtenidaEventPublisherBase: BebidaObtenidaPublisher,
        private readonly nombreBebidaCambiadoEventPublisherBase: NombreBebidaCambiadoPublisher,
        private readonly tamanioBebidaCambiadoEventPublisherBase: TamanioBebidaCambiadoPublisher,

        private readonly postreService: PostreService,
        private readonly postreCreadoEventPublisherBase: PostreCreadoPublisher,
        private readonly postreObtenidoEventPublisherBase: PostreObtenidoPublisher,
        private readonly tamanioPostreCambiadoEventPublisherBase: TamanioPostreCambiadoPublisher,
        private readonly postreEsParaVeganosCambiadoEventPublisherBase: PostreEsParaVeganosCambiadoPublisher,
    ) {}


    /**
     *Método para crear una entidad Entrada
     *
     * @param {CrearEntradaCommand} command
     * @return {*}  {Promise<IEntradaCreadaResponse>}
     * @memberof PedidoController
     */
    @Post('/crear-entrada')
    async crearEntrada(@Body() command: CrearEntradaCommand): Promise<IEntradaCreadaResponse> {
        const useCase = new CrearEntradaUseCase(
            this.entradaService,
            this.entradaCreadaEventPublisherBase,
        );
        return await useCase.execute(command);
    }

    /**
     *Método para crear una entidad Plato principal
     *
     * @param {CrearPlatoPrincipalCommand} command
     * @return {*}  {Promise<IPlatoPrincipalCreadoResponse>}
     * @memberof PedidoController
     */
    @Post('/crear-plato-principal')
    async crearPlatoPrincipal(@Body() command: CrearPlatoPrincipalCommand): Promise<IPlatoPrincipalCreadoResponse> {
        const useCase = new CrearPlatoPrincipalUseCase(
            this.platoPrincipalService,
            this.platoPrincipalCreadoEventPublisherBase,
        );
        return await useCase.execute(command);
    }

    /**
     *Método para crear una entidad Postre
     *
     * @param {CrearPostreCommand} command
     * @return {*}  {Promise<IPostreCreadoResponse>}
     * @memberof PedidoController
     */
    @Post('/crear-postre')
    async crearPostre(@Body() command: CrearPostreCommand): Promise<IPostreCreadoResponse> {
        const useCase = new CrearPostreUseCase(
            this.postreService,
            this.postreCreadoEventPublisherBase,
        );
        return await useCase.execute(command);
    }

    /**
     *Método para crear una entidad Bebida
     *
     * @param {CrearBebidaCommand} command
     * @return {*}  {Promise<IBebidaCreadaResponse>}
     * @memberof PedidoController
     */
    @Post('/crear-bebida')
    async crearBebida(@Body() command: CrearBebidaCommand): Promise<IBebidaCreadaResponse> {
        const useCase = new CrearBebidaUseCase(
            this.bebidaService,
            this.bebidaCreadaEventPublisherBase,
        );
        return await useCase.execute(command);
    }


    /**
     *Método para obtener una entidad Pedido
     *
     * @param {string} id
     * @return {*}  {Promise<IPedidoObtenidoResponse>}
     * @memberof PedidoController
     */
    @Get('/obtener-pedido/:id')
    async obtenerPedido(@Param('id') id: string): Promise<IPedidoObtenidoResponse> {
        const command: ObtenerPedidoCommand = {pedidoId: id};
        const useCase = new ObtenerPedidoUseCase(
            this.pedidoService,
            this.pedidoObtenidoEventPublisherBase,
        );
        return await useCase.execute(command);
    }

    /**
     *Método para obtener una entidad Bebida
     *
     * @param {string} id
     * @return {*}  {Promise<IBebidaObtenidaResponse>}
     * @memberof PedidoController
     */
    @Get('/obtener-bebida/:id')
    async obtenerBebida(@Param('id') id: string): Promise<IBebidaObtenidaResponse> {
        const command: ObtenerBebidaCommand = {bebidaId: id};
        const useCase = new ObtenerBebidaUseCase(
            this.bebidaService,
            this.bebidaObtenidaEventPublisherBase,
        );
        return await useCase.execute(command);
    }

    /**
     *Método para obtener una entidad Postre
     *
     * @param {string} id
     * @return {*}  {Promise<IPostreObtenidoResponse>}
     * @memberof PedidoController
     */
    @Get('/obtener-postre/:id')
    async obtenerPostre(@Param('id') id: string): Promise<IPostreObtenidoResponse> {
        const command: ObtenerPostreCommand = {postreId: id};
        const useCase = new ObtenerPostreUseCase(
            this.postreService,
            this.postreObtenidoEventPublisherBase,
        );
        return await useCase.execute(command);
    }

    /**
     *Método para cambiar el estado a una entidad Pedido
     *
     * @param {CambiarEstadoPedidoCommand} command
     * @return {*}  {Promise<IEstadoPedidoCambiadoResponse>}
     * @memberof PedidoController
     */
    @Patch('/cambiar-estado-pedido')
    async cambiarEstadoPedido(@Body() command: CambiarEstadoPedidoCommand): Promise<IEstadoPedidoCambiadoResponse> {
        const useCase = new CambiarEstadoPedidoUseCase(
            this.pedidoService,
            this.estadoPedidoCambiadoEventPublisherBase,
        );
        return await useCase.execute(command);
    }

    /**
     *Método para cambiar el precio a una entidad Pedido
     *
     * @param {CambiarPrecioPedidoCommand} command
     * @return {*}  {Promise<IPrecioPedidoCambiadoResponse>}
     * @memberof PedidoController
     */
    @Patch('/cambiar-precio-pedido')
    async cambiarPrecioPedido(@Body() command: CambiarPrecioPedidoCommand): Promise<IPrecioPedidoCambiadoResponse> {
        const useCase = new CambiarPrecioPedidoUseCase(
            this.pedidoService,
            this.precioPedidoCambiadoEventPublisherBase,
        );
        return await useCase.execute(command);
    }

    /**
     *Método para cambiar el nombre a una entidad Bebida
     *
     * @param {CambiarNombreBebidaCommand} command
     * @return {*}  {Promise<INombreBebidaCambiadoResponse>}
     * @memberof PedidoController
     */
    @Patch('/cambiar-nombre-bebida')
    async cambiarNombreBebida(@Body() command: CambiarNombreBebidaCommand): Promise<INombreBebidaCambiadoResponse> {
        const useCase = new CambiarNombreBebidaUseCase(
            this.bebidaService,
            this.nombreBebidaCambiadoEventPublisherBase,
            this.bebidaObtenidaEventPublisherBase
        );
        return await useCase.execute(command);
    }

    /**
     *Método para cambiar el tamaño a una entidad Bebida
     *
     * @param {CambiarTamanioBebidaCommand} command
     * @return {*}  {Promise<ITamanioBebidaCambiadoResponse>}
     * @memberof PedidoController
     */
    @Patch('/cambiar-tamanio-bebida')
    async cambiarTamanioBebida(@Body() command: CambiarTamanioBebidaCommand): Promise<ITamanioBebidaCambiadoResponse> {
        const useCase = new CambiarTamanioBebidaUseCase(
            this.bebidaService,
            this.tamanioBebidaCambiadoEventPublisherBase,
            this.bebidaObtenidaEventPublisherBase
        );
        return await useCase.execute(command);
    }

    /**
     *Método para cambiar el tamaño a una entidad Postre
     *
     * @param {CambiarTamanioPostreCommand} command
     * @return {*}  {Promise<ITamanioPostreCambiadoResponse>}
     * @memberof PedidoController
     */
    @Patch('/cambiar-tamanio-postre')
    async cambiarTamanioPostre(@Body() command: CambiarTamanioPostreCommand): Promise<ITamanioPostreCambiadoResponse> {
        const useCase = new CambiarTamanioPostreUseCase(
            this.postreService,
            this.tamanioPostreCambiadoEventPublisherBase,
            this.postreObtenidoEventPublisherBase
        );
        return await useCase.execute(command);
    }

    /**
     *Método para cambiar si una entidad Postre es para veganos
     *
     * @param {CambiarPostreEsParaVeganosCommand} command
     * @return {*}  {Promise<IPostreEsParaVeganosCambiadoResponse>}
     * @memberof PedidoController
     */
    @Patch('/cambiar-postre-es-para-veganos')
    async cambiarPostreEsParaVeganos(@Body() command: CambiarPostreEsParaVeganosCommand): Promise<IPostreEsParaVeganosCambiadoResponse> {
        const useCase = new CambiarPostreEsParaVeganosUseCase(
            this.postreService,
            this.postreEsParaVeganosCambiadoEventPublisherBase,
            this.postreObtenidoEventPublisherBase
        );
        return await useCase.execute(command);
    }
  
}
