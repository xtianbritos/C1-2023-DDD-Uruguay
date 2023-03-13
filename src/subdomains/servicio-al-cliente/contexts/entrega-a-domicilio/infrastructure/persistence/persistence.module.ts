import { Module } from "@nestjs/common";
import { MySqlModule } from './databases/mysql/my-sql.module';
import {
    ClienteService,
    RepartidorService,
    TicketService,
    PedidoService,
    EntradaService,
    PlatoPrincipalService,
    PostreService,
    BebidaService
} from './services';

@Module({
    imports: [MySqlModule],
    providers: [
        ClienteService,
        RepartidorService,
        TicketService,
        PedidoService,
        EntradaService,
        PlatoPrincipalService,
        PostreService,
        BebidaService
    ],
    exports: [
        ClienteService,
        RepartidorService,
        TicketService,
        PedidoService,
        EntradaService,
        PlatoPrincipalService,
        PostreService,
        BebidaService
    ]
})
export class PersistenceModule { }