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
    ObtenerPostreCommand,
    CambiarPostreEsParaVeganosCommand,
    CambiarTamanioPostreCommand
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
        private readonly tamanioPostreCambiadoEventPublisherBase: TamanioBebidaCambiadoPublisher,
        private readonly postreEsParaVeganosCambiadoEventPublisherBase: PostreEsParaVeganosCambiadoPublisher,
    ) {}


    @Post('/crear-entrada')
    async crearEntrada(@Body() command: CrearEntradaCommand): Promise<IEntradaCreadaResponse> {
        const useCase = new CrearEntradaUseCase(
            this.entradaService,
            this.entradaCreadaEventPublisherBase,
        );
        return await useCase.execute(command);
    }

    @Post('/crear-plato-principal')
    async crearPlatoPrincipal(@Body() command: CrearPlatoPrincipalCommand): Promise<IPlatoPrincipalCreadoResponse> {
        const useCase = new CrearPlatoPrincipalUseCase(
            this.platoPrincipalService,
            this.platoPrincipalCreadoEventPublisherBase,
        );
        return await useCase.execute(command);
    }

    @Post('/crear-postre')
    async crearPostre(@Body() command: CrearPostreCommand): Promise<IPostreCreadoResponse> {
        const useCase = new CrearPostreUseCase(
            this.postreService,
            this.postreCreadoEventPublisherBase,
        );
        return await useCase.execute(command);
    }

    @Post('/crear-bebida')
    async crearBebida(@Body() command: CrearBebidaCommand): Promise<IBebidaCreadaResponse> {
        const useCase = new CrearBebidaUseCase(
            this.bebidaService,
            this.bebidaCreadaEventPublisherBase,
        );
        return await useCase.execute(command);
    }


    @Get('/obtener-pedido/:id')
    async obtenerPedido(@Param('id') id: string): Promise<IPedidoObtenidoResponse> {
        const command: ObtenerPedidoCommand = {pedidoId: id};
        const useCase = new ObtenerPedidoUseCase(
            this.pedidoService,
            this.pedidoObtenidoEventPublisherBase,
        );
        return await useCase.execute(command);
    }

    @Get('/obtener-bebida/:id')
    async obtenerBebida(@Param('id') id: string): Promise<IBebidaObtenidaResponse> {
        const command: ObtenerBebidaCommand = {bebidaId: id};
        const useCase = new ObtenerBebidaUseCase(
            this.bebidaService,
            this.bebidaObtenidaEventPublisherBase,
        );
        return await useCase.execute(command);
    }

    @Get('/obtener-postre/:id')
    async obtenerPostre(@Param('id') id: string): Promise<IPostreObtenidoResponse> {
        const command: ObtenerPostreCommand = {postreId: id};
        const useCase = new ObtenerPostreUseCase(
            this.postreService,
            this.postreObtenidoEventPublisherBase,
        );
        return await useCase.execute(command);
    }

    @Patch('/cambiar-estado-pedido')
    async cambiarEstadoPedido(@Body() command: CambiarEstadoPedidoCommand): Promise<IEstadoPedidoCambiadoResponse> {
        const useCase = new CambiarEstadoPedidoUseCase(
            this.pedidoService,
            this.estadoPedidoCambiadoEventPublisherBase,
        );
        return await useCase.execute(command);
    }

    @Patch('/cambiar-precio-pedido')
    async cambiarPrecioPedido(@Body() command: CambiarPrecioPedidoCommand): Promise<IPrecioPedidoCambiadoResponse> {
        const useCase = new CambiarPrecioPedidoUseCase(
            this.pedidoService,
            this.precioPedidoCambiadoEventPublisherBase,
        );
        return await useCase.execute(command);
    }

    @Patch('/cambiar-nombre-bebida')
    async cambiarNombreBebida(@Body() command: CambiarNombreBebidaCommand): Promise<INombreBebidaCambiadoResponse> {
        const useCase = new CambiarNombreBebidaUseCase(
            this.bebidaService,
            this.nombreBebidaCambiadoEventPublisherBase,
            this.bebidaObtenidaEventPublisherBase
        );
        return await useCase.execute(command);
    }

    @Patch('/cambiar-tamanio-bebida')
    async cambiarTamanioBebida(@Body() command: CambiarTamanioBebidaCommand): Promise<ITamanioBebidaCambiadoResponse> {
        const useCase = new CambiarTamanioBebidaUseCase(
            this.bebidaService,
            this.tamanioBebidaCambiadoEventPublisherBase,
            this.bebidaObtenidaEventPublisherBase
        );
        return await useCase.execute(command);
    }

    @Patch('/cambiar-tamanio-postre')
    async cambiarTamanioPostre(@Body() command: CambiarTamanioPostreCommand): Promise<ITamanioPostreCambiadoResponse> {
        const useCase = new CambiarTamanioPostreUseCase(
            this.postreService,
            this.tamanioPostreCambiadoEventPublisherBase,
            this.postreObtenidoEventPublisherBase
        );
        return await useCase.execute(command);
    }

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
