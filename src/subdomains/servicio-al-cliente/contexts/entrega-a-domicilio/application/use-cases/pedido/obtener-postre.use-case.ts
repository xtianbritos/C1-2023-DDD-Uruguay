import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs/sofka";
import { PedidoAggregate } from "../../../domain/aggregates";
import { IPostreDomainEntity } from "../../../domain/entities/interfaces/pedido";
import { PostreDomainEntityBase } from "../../../domain/entities/pedido";
import { IObtenerPostreCommand } from "../../../domain/interfaces/commands/pedido";
import { IPostreObtenidoResponse } from "../../../domain/interfaces/responses/pedido";
import { IPostreDomainService } from "../../../domain/services";
import { PostreIdValueObject } from "../../../domain/value-objects/pedido/postre";
import { PostreObtenidoEventPublisherBase } from '../../../domain/events/publishers/pedido';


export class ObtenerPostreUseCase<
    Command extends IObtenerPostreCommand = IObtenerPostreCommand,
    Response extends IPostreObtenidoResponse = IPostreObtenidoResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly pedidoAggregateRoot: PedidoAggregate;

    constructor(
        private readonly postreService?: IPostreDomainService<PostreDomainEntityBase>,
        private readonly postreObtenidoEventPublisherBase?: PostreObtenidoEventPublisherBase,
    ) {
        super();
        this.pedidoAggregateRoot = new PedidoAggregate({
            postreService,
            postreObtenidoEventPublisherBase
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);
        const success = data ? true : false;

        return { success, data } as Response;
    }

    private async executeCommand(
        command: Command
    ): Promise<PostreDomainEntityBase | null> {
        const ValueObject = this.obtenerValueObject(command);
        this.validateValueObject(ValueObject);
        return this.exectuePedidoAggregateRoot(ValueObject.postreId.valueOf())
    }

    private obtenerValueObject(
        command: Command
    ): IPostreDomainEntity {

        const postreId = new PostreIdValueObject(command.postreId);

        return {
            postreId
        }
    }

    private validateValueObject(
        valueObject: IPostreDomainEntity
    ): void {
        const {
            postreId
        } = valueObject

        if (postreId instanceof PostreIdValueObject && postreId.hasErrors())
            this.setErrors(postreId.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por ObtenerPostreUseCase',
                this.getErrors(),
            );

    }

    private exectuePedidoAggregateRoot(
        postreId: string,
    ): Promise<PostreDomainEntityBase | null> {
        return this.pedidoAggregateRoot.obtenerPostre(postreId);
    }
}