
import { EventPublisherBase } from "../../../../../../../../libs/sofka";

export abstract class TamanioPostreCambiadoEventPublisherBase<
    Response = string
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'entrega_a_domicilio.tamanio-postre-cambiado',
            JSON.stringify({ data: this.response })
        )
    }
}