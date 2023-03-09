import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs/sofka";
import { PedidoAggregate } from "../../../domain/aggregates";
import { IBebidaDomainEntity } from "../../../domain/entities/interfaces/pedido";
import { BebidaDomainEntityBase } from "../../../domain/entities/pedido";
import { ICambiarNombreBebidaCommand } from "../../../domain/interfaces/commands/pedido";
import { INombreBebidaCambiadoResponse } from "../../../domain/interfaces/responses/pedido";
import { IBebidaDomainService } from "../../../domain/services";
import { BebidaIdValueObject, NombreValueObject } from "../../../domain/value-objects/pedido/bebida";
import { NombreBebidaCambiadoEventPublisherBase } from '../../../domain/events/publishers/pedido';


export class CambiarNombreBebidaUseCase<
    Command extends ICambiarNombreBebidaCommand = ICambiarNombreBebidaCommand,
    Response extends INombreBebidaCambiadoResponse = INombreBebidaCambiadoResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly pedidoAggregateRoot: PedidoAggregate;

    constructor(
        private readonly bebidaService?: IBebidaDomainService<BebidaDomainEntityBase>,
        private readonly nombreBebidaCambiadoEventPublisherBase?: NombreBebidaCambiadoEventPublisherBase,
    ) {
        super();
        this.pedidoAggregateRoot = new PedidoAggregate({
            bebidaService,
            nombreBebidaCambiadoEventPublisherBase
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
        const entity = await this.obtenerEntityBebidaDomain(valueObject);
        const entityUpdated = this.cambiarNombreEntidadBebidaDomain(entity, valueObject);
        return this.exectuePedidoAggregateRoot(entityUpdated)
    }

    private createValueObject(
        command: Command
    ): IBebidaDomainEntity {

        const bebidaId = new BebidaIdValueObject(command.bebidaId);
        const nombre = new NombreValueObject(command.nuevoNombre);

        return {
            bebidaId,
            nombre
        }
    }

    private validateValueObject(
        valueObject: IBebidaDomainEntity
    ): void {
        const {
            bebidaId,
            nombre
        } = valueObject

        if (nombre instanceof NombreValueObject && nombre.hasErrors())
            this.setErrors(nombre.getErrors());

        if (bebidaId instanceof BebidaIdValueObject && bebidaId.hasErrors())
            this.setErrors(bebidaId.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por CambiarNombreBebidaUseCase',
                this.getErrors(),
            );

    }

    private async obtenerEntityBebidaDomain(
        objetoDeValor: IBebidaDomainEntity
    ): Promise<BebidaDomainEntityBase> | null{

        const bebidaId = objetoDeValor.bebidaId.valueOf();

        let entidad = this.bebidaService.obtenerBebida(bebidaId)

        return entidad;
    }

    private cambiarNombreEntidadBebidaDomain(
        entidad: BebidaDomainEntityBase | null,
        objetoDeValor: IBebidaDomainEntity
    ): BebidaDomainEntityBase {
        if(entidad != null) {
            const entidadActualizada = entidad;
            entidadActualizada.nombre = objetoDeValor.nombre;

            return entidadActualizada;
        }
    }

    private exectuePedidoAggregateRoot(
        entity: BebidaDomainEntityBase
    ): Promise<string | null> {
        const bebidaId = entity.bebidaId.valueOf();
        const nuevoNombre = entity.bebidaId.valueOf();
        
        return this.pedidoAggregateRoot.cambiarNombreBebida(bebidaId, nuevoNombre)
    }
}