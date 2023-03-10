import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs/sofka";
import { PedidoAggregate } from "../../../domain/aggregates";
import { IPedidoDomainEntity } from "../../../domain/entities/interfaces/pedido";
import { PedidoDomainEntityBase } from "../../../domain/entities/pedido";
import { ICambiarPrecioPedidoCommand } from "../../../domain/interfaces/commands/pedido";
import { IPrecioPedidoCambiadoResponse } from "../../../domain/interfaces/responses/pedido";
import { IPedidoDomainService } from "../../../domain/services";
import { PedidoIdValueObject, PrecioValueObject } from "../../../domain/value-objects/pedido";
import { PrecioPedidoCambiadoEventPublisherBase } from '../../../domain/events/publishers/pedido';


export class CambiarPrecioPedidoUseCase<
    Command extends ICambiarPrecioPedidoCommand = ICambiarPrecioPedidoCommand,
    Response extends IPrecioPedidoCambiadoResponse = IPrecioPedidoCambiadoResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly pedidoAggregateRoot: PedidoAggregate;

    constructor(
        private readonly pedidoService?: IPedidoDomainService<PedidoDomainEntityBase>,
        private readonly precioPedidoCambiadoEventPublisherBase?: PrecioPedidoCambiadoEventPublisherBase,
    ) {
        super();
        this.pedidoAggregateRoot = new PedidoAggregate({
            pedidoService,
            precioPedidoCambiadoEventPublisherBase
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);
        const success = data ? true : false;

        return { success, data } as Response;
    }

    private async executeCommand(
        command: Command
    ): Promise<number | null> {
        const valueObject = this.createValueObject(command);
        this.validateValueObject(valueObject);
        const entity = await this.obtenerEntityPedidoDomain(valueObject);
        const entityUpdated = this.cambiarPrecioEntityPedidoDomain(entity, valueObject);
        return this.exectuePedidoAggregateRoot(entityUpdated)
    }

    private createValueObject(
        command: Command
    ): IPedidoDomainEntity {

        const pedidoId = new PedidoIdValueObject(command.pedidoId);
        const precio = new PrecioValueObject(command.nuevoPrecio);

        return {
            pedidoId,
            precio
        }
    }

    private validateValueObject(
        valueObject: IPedidoDomainEntity
    ): void {
        const {
            pedidoId,
            precio
        } = valueObject

        if (pedidoId instanceof PedidoIdValueObject && pedidoId.hasErrors())
            this.setErrors(pedidoId.getErrors());

        if (precio instanceof PrecioValueObject && precio.hasErrors())
            this.setErrors(precio.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por CambiarPrecioPedidoUseCase',
                this.getErrors(),
            );

    }

    private async obtenerEntityPedidoDomain(
        valueObject: IPedidoDomainEntity
    ): Promise<PedidoDomainEntityBase> {

        const {
            pedidoId
        } = valueObject;

        return this.pedidoService.obtenerPedido(pedidoId.valueOf());
    }

    private cambiarPrecioEntityPedidoDomain(
        entity: PedidoDomainEntityBase,
        valueObject: IPedidoDomainEntity
    ): PedidoDomainEntityBase {

        const {
            precio
        } = valueObject;

        entity.precio = precio;

        return entity;
    }

    private exectuePedidoAggregateRoot(
        entity: PedidoDomainEntityBase,
    ): Promise<number | null> {
        const pedidoId = entity.pedidoId.valueOf();
        const nuevoPrecio = entity.precio.valueOf();

        return this.pedidoAggregateRoot.cambiarPrecioPedido(pedidoId, nuevoPrecio)
    }
}