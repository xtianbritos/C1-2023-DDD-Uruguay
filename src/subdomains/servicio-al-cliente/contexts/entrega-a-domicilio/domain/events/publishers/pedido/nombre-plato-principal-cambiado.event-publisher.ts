
import { EventPublisherBase } from "src/libs";

export abstract class NombrePlatoCambiadoEventPublisherBase<
    Response = string
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'management_system.nombre-plato-cambiado',
            JSON.stringify({ data: this.response })
        )
    }
}