import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs/sofka";
import { PedidoAggregate } from "../../../domain/aggregates";
import { IBebidaDomainEntity } from "../../../domain/entities/interfaces/pedido";
import {
    BebidaDomainEntityBase,
    EntradaDomainEntityBase,
    PedidoDomainEntityBase,
    PlatoPrincipalDomainEntityBase,
    PostreDomainEntityBase
} from "../../../domain/entities/pedido";
import {
    BebidaCreadaEventPublisherBase, 
    EntradaCreadaEventPublisherBase,
    EstadoPedidoCambiadoEventPublisherBase,
    GuarnicionPlatoPrincipalCambiadoEventPublisherBase,
    NombreBebidaCambiadoEventPublisherBase,
    NombreEntradaCambiadoEventPublisherBase,
    NombrePlatoPrincipalCambiadoEventPublisherBase,
    NombrePostreCambiadoEventPublisherBase,
    PedidoCreadoEventPublisherBase,
    PlatoPrincipalCreadoEventPublisherBase,
    PostreCreadoEventPublisherBase,
    PostreEsParaVeganosCambiadoEventPublisherBase,
    PrecioPedidoCambiadoEventPublisherBase,
    TamanioBebidaCambiadoEventPublisherBase,
    TamanioPostreCambiadoEventPublisherBase
} from "../../../domain/events/publishers/pedido";
import { ICrearBebidaCommand } from "../../../domain/interfaces/commands/pedido";
import { IBebidaCreadaResponse, IPedidoCreadoResponse } from "../../../domain/interfaces/responses/pedido";
import {
    IBebidaDomainService,
    IEntradaDomainService,
    IPedidoDomainService,
    IPlatoPrincipalDomainService,
    IPostreDomainService
} from "../../../domain/services";
import { NombreValueObject, TamanioValueObject } from "../../../domain/value-objects/pedido/bebida";


// export class CrearBebidaUseCase<
    Command extends ICrearBebidaCommand = ICrearBebidaCommand,
    Response extends IBebidaCreadaResponse = IBebidaCreadaResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly pedidoAggregateRoot: PedidoAggregate;

    constructor(
        // private readonly pedidoService: IPedidoDomainService<PedidoDomainEntityBase>,
        // private readonly entradaService?: IEntradaDomainService<EntradaDomainEntityBase>,
        // private readonly platoPrincipalService?: IPlatoPrincipalDomainService<PlatoPrincipalDomainEntityBase>,
        // private readonly postreService?: IPostreDomainService<PostreDomainEntityBase>,
        // private readonly bebidaService?: IBebidaDomainService<BebidaDomainEntityBase>,
        // private readonly pedidoCreadoEventPublisherBase?: PedidoCreadoEventPublisherBase,
        // private readonly entradaCreadaEventPublisherBase?: EntradaCreadaEventPublisherBase,
        // private readonly platoPrincipalCreadoEventPublisherBase?: PlatoPrincipalCreadoEventPublisherBase,
        // private readonly postreCreadoEventPublisherBase?: PostreCreadoEventPublisherBase,
        // private readonly bebidaCreadaEventPublisherBase?: BebidaCreadaEventPublisherBase,
        // private readonly estadoPedidoCambiadoEventPublisherBase?: EstadoPedidoCambiadoEventPublisherBase,
        // private readonly precioPedidoCambiadoEventPublisherBase?: PrecioPedidoCambiadoEventPublisherBase,
        // private readonly nombreEntradaCambiadoEventPublisherBase?: NombreEntradaCambiadoEventPublisherBase,
        // private readonly nombrePlatoPrincipalCambiadoEventPublisherBase?: NombrePlatoPrincipalCambiadoEventPublisherBase,
        // private readonly guarnicionPlatoPrincipalCambiadoEventPublisherBase?: GuarnicionPlatoPrincipalCambiadoEventPublisherBase,
        // private readonly nombrePostreCambiadoEventPublisherBase?: NombrePostreCambiadoEventPublisherBase,
        // private readonly nombreBebidaCambiadoEventPublisherBase?: NombreBebidaCambiadoEventPublisherBase,
        // private readonly tamanioBebidaCambiadoEventPublisherBase?: TamanioBebidaCambiadoEventPublisherBase,
        // private readonly tamanioPostreCambiadoEventPublisherBase?: TamanioPostreCambiadoEventPublisherBase,
        // private readonly postreEsParaVeganosCambiadoEventPublisherBase?: PostreEsParaVeganosCambiadoEventPublisherBase,
    ) {
        super();
        this.pedidoAggregateRoot = new PedidoAggregate({
            // pedidoService,
            // entradaService,
            // platoPrincipalService,
            // pedidoCreadoEventPublisherBase,
            // entradaCreadaEventPublisherBase,
            // platoPrincipalCreadoEventPublisherBase,
            // estadoPedidoCambiadoEventPublisherBase,
            // precioPedidoCambiadoEventPublisherBase,
            // nombreEntradaCambiadoEventPublisherBase,
            // guarnicionPlatoPrincipalCambiadoEventPublisherBase,
            // nombrePostreCambiadoEventPublisherBase,
            // nombreBebidaCambiadoEventPublisherBase,
            // tamanioBebidaCambiadoEventPublisherBase,
            // tamanioPostreCambiadoEventPublisherBase,
            // postreEsParaVeganosCambiadoEventPublisherBase
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);
        const success = data ? true : false;

        return { success, data } as Response;
    }

    private async executeCommand(
        command: Command
    ): Promise<BebidaDomainEntityBase | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);
        const entity = this.createEntityBebidaDomain(ValueObject);
        return this.exectuePedidoAggregateRoot(entity)
    }

    private createValueObject(
        command: Command
    ): IBebidaDomainEntity {

        const nombre = new NombreValueObject(command.nombre);
        const tamanio = new TamanioValueObject(command.tamanio);

        return {
            nombre,
            tamanio
        }
    }

    private validateValueObject(
        valueObject: IBebidaDomainEntity
    ): void {
        const {
            nombre,
            tamanio
        } = valueObject

        if (nombre instanceof NombreValueObject && nombre.hasErrors())
            this.setErrors(nombre.getErrors());

        if (tamanio instanceof TamanioValueObject && tamanio.hasErrors())
            this.setErrors(tamanio.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por CrearBebidaUseCase',
                this.getErrors(),
            );

    }

    private createEntityBebidaDomain(
        valueObject: IBebidaDomainEntity
    ): BebidaDomainEntityBase {

        const {
            nombre,
            tamanio
        } = valueObject

        return new BebidaDomainEntityBase({
            nombre: nombre.valueOf(),
            tamanio: tamanio.valueOf()
        })
    }

    private exectuePedidoAggregateRoot(
        entity: BebidaDomainEntityBase,
    ): Promise<BebidaDomainEntityBase | null> {
        return this.pedidoAggregateRoot.crearBebida(entity)
    }
}