import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs/sofka";
import { PedidoAggregate } from "../../../domain/aggregates";
import { IPostreDomainEntity } from "../../../domain/entities/interfaces/pedido";
import { PostreDomainEntityBase } from "../../../domain/entities/pedido";
import { ICambiarNombrePostreCommand } from "../../../domain/interfaces/commands/pedido";
import { INombrePostreCambiadoResponse } from "../../../domain/interfaces/responses/pedido";
import { IPostreDomainService } from "../../../domain/services";
import { PostreIdValueObject, NombreValueObject } from "../../../domain/value-objects/pedido/postre";
import { NombrePostreCambiadoEventPublisherBase } from '../../../domain/events/publishers/pedido';


export class CambiarNombrePostreUseCase<
    Command extends ICambiarNombrePostreCommand = ICambiarNombrePostreCommand,
    Response extends INombrePostreCambiadoResponse = INombrePostreCambiadoResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly pedidoAggregateRoot: PedidoAggregate;

    constructor(
        private readonly postreService?: IPostreDomainService<PostreDomainEntityBase>,
        private readonly nombrePostreCambiadoEventPublisherBase?: NombrePostreCambiadoEventPublisherBase
    ) {
        super();
        this.pedidoAggregateRoot = new PedidoAggregate({
            postreService,
            nombrePostreCambiadoEventPublisherBase
        })
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
        this.cambiarNombreEntidadPostreDomain(command.postreId, command.nuevoNombre);
        return this.exectuePedidoAggregateRoot(command.postreId, command.nuevoNombre)
    }

    private createValueObject(
        command: Command
    ): IPostreDomainEntity {
        const postreId = new PostreIdValueObject(command.postreId);
        const nombre = new NombreValueObject(command.nuevoNombre);

        return {
            postreId,
            nombre
        }
    }

    private validateValueObject(
        valueObject: IPostreDomainEntity
    ): void {
        const {
            postreId,
            nombre
        } = valueObject

        if (nombre instanceof NombreValueObject && nombre.hasErrors())
            this.setErrors(nombre.getErrors());

        if (postreId instanceof PostreIdValueObject && postreId.hasErrors())
            this.setErrors(postreId.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por CambiarNombrePostreUseCase',
                this.getErrors(),
            );

    }

    private cambiarNombreEntidadPostreDomain(
        postreId: string,
        nuevoNombre: string
    ): Promise<string> {
        return this.postreService.cambiarNombre(postreId, nuevoNombre);
    }

    private exectuePedidoAggregateRoot(
        postreId: string,
        nuevoNombre: string
    ): Promise<string | null> {        
        return this.pedidoAggregateRoot.cambiarNombrePostre(postreId, nuevoNombre)
    }
}