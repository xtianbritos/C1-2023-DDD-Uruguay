import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs/sofka";
import { PedidoAggregate } from "../../../domain/aggregates";
import { IPostreDomainEntity } from "../../../domain/entities/interfaces/pedido";
import { PostreDomainEntityBase } from "../../../domain/entities/pedido";
import { ICambiarTamanioPostreCommand, IObtenerPostreCommand } from "../../../domain/interfaces/commands/pedido";
import { IPostreObtenidoResponse, ITamanioPostreCambiadoResponse } from "../../../domain/interfaces/responses/pedido";
import { IPostreDomainService } from "../../../domain/services";
import { PostreIdValueObject, TamanioValueObject } from "../../../domain/value-objects/pedido/postre";
import { PostreObtenidoEventPublisherBase, TamanioPostreCambiadoEventPublisherBase } from '../../../domain/events/publishers/pedido';
import { ObtenerPostreUseCase } from './obtener-postre.use-case';


export class CambiarTamanioPostreUseCase<
    Command extends ICambiarTamanioPostreCommand = ICambiarTamanioPostreCommand,
    Response extends ITamanioPostreCambiadoResponse = ITamanioPostreCambiadoResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly pedidoAggregateRoot: PedidoAggregate;
    private readonly obtenerPostreUseCase: ObtenerPostreUseCase<
        IObtenerPostreCommand,
        IPostreObtenidoResponse
    >;

    constructor(
        private readonly postreService?: IPostreDomainService<PostreDomainEntityBase>,
        private readonly tamanioPostreCambiadoEventPublisherBase?: TamanioPostreCambiadoEventPublisherBase,
        private readonly postreObtenidoEventPublisherBase?: PostreObtenidoEventPublisherBase,
    ) {
        super();
        this.pedidoAggregateRoot = new PedidoAggregate({
            postreService,
            tamanioPostreCambiadoEventPublisherBase
        });
        this.obtenerPostreUseCase = new ObtenerPostreUseCase(
            postreService,
            postreObtenidoEventPublisherBase
        )
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);
        const success = data ? true : false;

        return { success, data } as Response;
    }

    private async executeCommand(
        command: Command
    ): Promise<string | null> {
        const valueObject = this.createValueObject(command);
        this.validateValueObject(valueObject);
        const entity = await this.obtenerEntityPostreDomain(command);
        const entityUpdated = this.cambiarTamanioEntityPostreDomain(entity, valueObject);
        return this.exectuePostreAggregateRoot(entityUpdated)
    }

    private createValueObject(
        command: Command
    ): IPostreDomainEntity {

        const postreId = new PostreIdValueObject(command.postreId);
        const tamanio = new TamanioValueObject(command.nuevoTamanio);

        return {
            postreId,
            tamanio
        }
    }

    private validateValueObject(
        valueObject: IPostreDomainEntity
    ): void {
        const {
            tamanio
        } = valueObject

        if (tamanio instanceof TamanioValueObject && tamanio.hasErrors())
            this.setErrors(tamanio.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por CambiarTamanioPostreUseCase',
                this.getErrors(),
            );

    }

    private async obtenerEntityPostreDomain(
        command: IObtenerPostreCommand
    ): Promise<PostreDomainEntityBase> {
        const success = (await this.obtenerPostreUseCase.execute(command)).success;
        const entity = (await this.obtenerPostreUseCase.execute(command)).data;

        if (entity === null || success === false)
            throw new Error('No se ha podido obtener la entidad');

        return entity;
    }

    private cambiarTamanioEntityPostreDomain(
        entity: PostreDomainEntityBase,
        valueObject: IPostreDomainEntity
    ): PostreDomainEntityBase {

        const {
            tamanio
        } = valueObject;

        entity.tamanio = tamanio;

        return entity;
    }

    private exectuePostreAggregateRoot(
        entity: PostreDomainEntityBase,
    ): Promise<string | null> {
        const postreId = entity.postreId.valueOf();
        const nuevoTamanio = entity.tamanio.valueOf();

        return this.pedidoAggregateRoot.cambiarTamañoPostre(postreId, nuevoTamanio)
    }
}