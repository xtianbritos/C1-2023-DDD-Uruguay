import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs/sofka";
import { PedidoAggregate } from "../../../domain/aggregates";
import { IPostreDomainEntity } from "../../../domain/entities/interfaces/pedido";
import { PostreDomainEntityBase } from "../../../domain/entities/pedido";
import { ICambiarPostreEsParaVeganosCommand, IObtenerPostreCommand } from "../../../domain/interfaces/commands/pedido";
import { IPostreObtenidoResponse, IPostreEsParaVeganosCambiadoResponse } from "../../../domain/interfaces/responses/pedido";
import { IPostreDomainService } from "../../../domain/services";
import { PostreIdValueObject, EsParaVeganosValueObject } from "../../../domain/value-objects/pedido/postre";
import { PostreObtenidoEventPublisherBase, PostreEsParaVeganosCambiadoEventPublisherBase } from '../../../domain/events/publishers/pedido';
import { ObtenerPostreUseCase } from './obtener-postre.use-case';


export class CambiarPostreEsParaVeganosUseCase<
    Command extends ICambiarPostreEsParaVeganosCommand = ICambiarPostreEsParaVeganosCommand,
    Response extends IPostreEsParaVeganosCambiadoResponse = IPostreEsParaVeganosCambiadoResponse
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
        private readonly postreEsParaVeganosCambiadoEventPublisherBase?: PostreEsParaVeganosCambiadoEventPublisherBase,
        private readonly postreObtenidoEventPublisherBase?: PostreObtenidoEventPublisherBase,
    ) {
        super();
        this.pedidoAggregateRoot = new PedidoAggregate({
            postreService,
            postreEsParaVeganosCambiadoEventPublisherBase
        });
        this.obtenerPostreUseCase = new ObtenerPostreUseCase(
            postreService,
            postreObtenidoEventPublisherBase
        )
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);
        const success = data != undefined ? true : false;

        return { success, data } as Response;
    }

    private async executeCommand(
        command: Command
    ): Promise<boolean | null> {
        const valueObject = this.createValueObject(command);
        this.validateValueObject(valueObject);
        const entity = await this.obtenerEntityPostreDomain(command);
        const entityUpdated = this.cambiarEsParaVeganosEntityPostreDomain(entity, valueObject);
        return this.exectuePostreAggregateRoot(entityUpdated)
    }

    private createValueObject(
        command: Command
    ): IPostreDomainEntity {

        const postreId = new PostreIdValueObject(command.postreId);
        const esParaVeganos = new EsParaVeganosValueObject(command.nuevoEstado);

        return {
            postreId,
            esParaVeganos
        }
    }

    private validateValueObject(
        valueObject: IPostreDomainEntity
    ): void {
        const {
            esParaVeganos
        } = valueObject

        if (esParaVeganos instanceof EsParaVeganosValueObject && esParaVeganos.hasErrors())
            this.setErrors(esParaVeganos.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por CambiarPostreEsParaVeganosUseCase',
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

    private cambiarEsParaVeganosEntityPostreDomain(
        entity: PostreDomainEntityBase,
        valueObject: IPostreDomainEntity
    ): PostreDomainEntityBase {

        const {
            esParaVeganos
        } = valueObject;

        entity.esParaVeganos = esParaVeganos;

        return entity;
    }

    private exectuePostreAggregateRoot(
        entity: PostreDomainEntityBase,
    ): Promise<boolean | null> {
        const postreId = entity.postreId.valueOf();
        const nuevoEsParaVeganos = entity.esParaVeganos.valueOf();

        return this.pedidoAggregateRoot.cambiarPostreEsPAraVeganos(postreId, nuevoEsParaVeganos)
    }
}