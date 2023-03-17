
import { EventPublisherBase } from "../../../../../../../../libs/sofka";

export abstract class NombrePlatoPrincipalCambiadoEventPublisherBase<
    Response = string
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'entrega_a_domicilio.nombre-plato-cambiado',
            JSON.stringify({ data: this.response })
        )
    }
}