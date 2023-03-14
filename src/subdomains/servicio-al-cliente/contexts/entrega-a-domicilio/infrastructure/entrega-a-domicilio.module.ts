import { Controller, Module } from "@nestjs/common";
import {
    TicketController,

    PedidoController,

} from "./controllers";

import { PersistenceModule } from "./persistence/persistence.module";

@Module({
    imports:[PersistenceModule],
    controllers:[
        TicketController,

        PedidoController,

    ],
    providers:[],
    exports:[]
})
export class EntregaADomicilioModule {}