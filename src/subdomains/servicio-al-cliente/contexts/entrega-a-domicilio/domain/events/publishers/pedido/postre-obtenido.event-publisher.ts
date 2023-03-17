
import { EventPublisherBase } from "../../../../../../../../libs/sofka";
import { PostreDomainEntityBase } from "../../../entities";


export abstract class PostreObtenidoEventPublisherBase<
    Response = PostreDomainEntityBase
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'entrega_a_domicilio.postre-obtenido',
            JSON.stringify({ data: this.response })
        )
    }
}