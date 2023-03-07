import {
    IBebidaDomainService,
    IEntradaDomainService,
    IPostreDomainService,
    IPlatoPrincipalDomainService,
    IPedidoDomainService
} from "../services";

import {
    BebidaCreadaEventPublisherBase,
    PedidoCreadoEventPublisherBase,
    PostreCreadoEventPublisherBase
} from '../events/publishers/pedido';

import {
    BebidaDomainEntityBase,
    EntradaDomainEntityBase,
    PostreDomainEntityBase,
    PlatoPrincipalDomainEntityBase,
    PedidoDomainEntityBase
} from "../entities";

import { AggregateRootException } from '../../../../../../libs/sofka/exceptions';

import {
    NombreEntradaCambiadoEventPublisherBase,
    EntradaCreadaEventPublisherBase,
    PlatoPrincipalCreadoEventPublisherBase,
} from "../events/publishers/pedido";

export class PedidoAggregate
    implements IPedidoDomainService<PedidoDomainEntityBase> {

        private readonly pedidoService?: IPedidoDomainService<PedidoDomainEntityBase>;
        private readonly entradaService?: IEntradaDomainService<EntradaDomainEntityBase>;
        private readonly platoPrincipalService?: IPlatoPrincipalDomainService<PlatoPrincipalDomainEntityBase>;
        private readonly postreService?: IPostreDomainService<PostreDomainEntityBase>;
        private readonly bebidaService?: IBebidaDomainService<BebidaDomainEntityBase>;
       
        private readonly pedidoCreadoEventPublisherBase?: PedidoCreadoEventPublisherBase;
        private readonly entradaCreadaEventPublisherBase?: EntradaCreadaEventPublisherBase;
        private readonly platoPrincipalCreadoEventPublisherBase?: PlatoPrincipalCreadoEventPublisherBase;
        private readonly postreCreadoEventPublisherBase?: PostreCreadoEventPublisherBase;
        private readonly bebidaCreadaEventPublisherBase?: BebidaCreadaEventPublisherBase;


        constructor(
            {
                pedidoService,
                entradaService,
                platoPrincipalService,

                pedidoCreadoEventPublisherBase,
                entradaCreadaEventPublisherBase,
                platoPrincipalCreadoEventPublisherBase,

                nombreEntradaCambiadoEventPublisherBase,
            }: {
                pedidoService?: IPedidoDomainService<PedidoDomainEntityBase>,
                entradaService?: IEntradaDomainService<EntradaDomainEntityBase>,
                platoPrincipalService?: IPlatoPrincipalDomainService<PlatoPrincipalDomainEntityBase>,

                pedidoCreadoEventPublisherBase?: PedidoCreadoEventPublisherBase,
                entradaCreadaEventPublisherBase?: EntradaCreadaEventPublisherBase,
                platoPrincipalCreadoEventPublisherBase?: PlatoPrincipalCreadoEventPublisherBase,

                nombreEntradaCambiadoEventPublisherBase?: NombreEntradaCambiadoEventPublisherBase,
            }
        ) {
            this.pedidoService = pedidoService,
            this.entradaService = entradaService,
            this.platoPrincipalService = platoPrincipalService,

            this.pedidoCreadoEventPublisherBase = pedidoCreadoEventPublisherBase,
            this.entradaCreadaEventPublisherBase = entradaCreadaEventPublisherBase,
            this.platoPrincipalCreadoEventPublisherBase = platoPrincipalCreadoEventPublisherBase,

            this.direccionEntradaCambiadaEventPublisherBase = direccionEntradaCambiadaEventPublisherBase,

        }
    
        async crearPedido(pedido: PedidoDomainEntityBase): Promise<PedidoDomainEntityBase> {
            if(this.pedidoService && this.pedidoCreadoEventPublisherBase) {
                const result = await this.pedidoService.crearPedido(pedido);
                this.pedidoCreadoEventPublisherBase.response = result;
                this.pedidoCreadoEventPublisherBase.publish();
                return this.pedidoCreadoEventPublisherBase.response;
            }
            throw new AggregateRootException(
                'PedidoAggregate "PedidoService" y/o "pedidoCreadoEventPublisherBase" no están definidos'
            )
        }

        cambiarEstadoPedido(pedidoId: string, nuevoEstado: string): Promise<string> {
            throw new Error("Method not implemented.");
        }

        cambiarPrecioPedido(pedidoId: string, nuevoPRecio: number): Promise<number> {
            throw new Error("Method not implemented.");
        }

        async crearEntrada(entrada: EntradaDomainEntityBase): Promise<EntradaDomainEntityBase> {
            if(this.entradaService && this.entradaCreadaEventPublisherBase) {
                const result = await this.entradaService.crearEntrada(entrada);
                this.entradaCreadaEventPublisherBase.response = result;
                this.entradaCreadaEventPublisherBase.publish();
                return this.entradaCreadaEventPublisherBase.response;
            }
            throw new AggregateRootException(
                'PedidoAggregate "entradaService" y/o "entradaCreadaEventPublisherBase" no están definidos'
            )
        }

        cambiarNombreEntrada(entradaId: string, nuevoNombre: string): Promise<string> {
            throw new Error("Method not implemented.");
        }

        async crearPlatoPrincipal(platoPrincipal: PlatoPrincipalDomainEntityBase): Promise<PlatoPrincipalDomainEntityBase> {
            if(this.platoPrincipalService && this.platoPrincipalCreadoEventPublisherBase) {
                const result = await this.platoPrincipalService.crearPlatoPrincipal(platoPrincipal);
                this.platoPrincipalCreadoEventPublisherBase.response = result;
                this.platoPrincipalCreadoEventPublisherBase.publish();
                return this.platoPrincipalCreadoEventPublisherBase.response;
            }
            throw new AggregateRootException(
                'PedidoAggregate "platoPrincipalService" y/o "platoPrincipalCreadoEventPublisherBase" no están definidos'
            )
        }

        cambiarNombrePlatoPrincipal(platoPrincipalId: string, nuevoNombre: string): Promise<string> {
            throw new Error("Method not implemented.");
        }

        cambiarGuarnicionPlatoPrincipal(platoPrincipalId: string, nuevaGuarnicion: string): Promise<string> {
            throw new Error("Method not implemented.");
        }

        async crearBebida(bebida: BebidaDomainEntityBase): Promise<BebidaDomainEntityBase> {
            if(this.bebidaService && this.bebidaCreadaEventPublisherBase) {
                const result = await this.bebidaService.crearBebida(bebida);
                this.bebidaCreadaEventPublisherBase.response = result;
                this.bebidaCreadaEventPublisherBase.publish();
                return this.bebidaCreadaEventPublisherBase.response;
            }
            throw new AggregateRootException(
                'PedidoAggregate "bebidaService" y/o "bebidaCreadaEventPublisherBase" no están definidos'
            )
        }

        cambiarNombreBebida(bebidaId: string, nuevoNombre: string): Promise<string> {
            throw new Error("Method not implemented.");
        }

        cambiarTamañoBebida(bebidaId: string, nuevoTamaño: string): Promise<string> {
            throw new Error("Method not implemented.");
        }

        async crearPostre(postre: PostreDomainEntityBase): Promise<PostreDomainEntityBase> {
            if(this.postreService && this.postreCreadoEventPublisherBase) {
                const result = await this.postreService.crearPostre(postre);
                this.postreCreadoEventPublisherBase.response = result;
                this.postreCreadoEventPublisherBase.publish();
                return this.postreCreadoEventPublisherBase.response;
            }
            throw new AggregateRootException(
                'PedidoAggregate "postreService" y/o "postreCreadoEventPublisherBase" no están definidos'
            )
        }

        cambiarNombrePostre(postreId: string, nuevoNombre: string): Promise<string> {
            throw new Error("Method not implemented.");
        }

        cambiarTamañoPostre(posteId: string, nuevoTamaño: string): Promise<string> {
            throw new Error("Method not implemented.");
        }

        cambiarPostreEsPAraVeganos(posteId: string, nuevoEstado: boolean): Promise<boolean> {
            throw new Error("Method not implemented.");
        }

        
    }