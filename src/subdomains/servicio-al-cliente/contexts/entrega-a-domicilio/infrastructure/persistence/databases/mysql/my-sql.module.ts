import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmMySqlConfigService } from './configs/type-orm.mysql.service';
import {
    BebidaMySqlEntity,
    EntradaMySqlEntity,
    PedidoMySqlEntity,
    PlatoPrincipalMySqlEntity,
    PostreMySqlEntity,
    RepartidorMySqlEntity,
    ClienteMySqlEntity,
    TicketMySqlEntity
} from './entities';

import {
    RepartidorMySqlService,
    ClienteMySqlService,
    TicketMySqlService,
    PedidoMySqlService,
    EntradaMySqlService,
    PlatoPrincipalMySqlService,
    PostreMySqlService,
    BebidaMySqlService
} from './services';

import {
    RepartidorMySqlRepository,
    ClienteMySqlRepository,
    TicketMySqlRepository,
    PedidoMySqlRepository,
    EntradaMySqlRepository,
    PlatoPrincipalMySqlRepository,
    PostreMySqlRepository,
    BebidaMySqlRepository
} from './repositories';


@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useClass: TypeOrmMySqlConfigService,
        }),

        TypeOrmModule.forFeature([
            TicketMySqlEntity,
            ClienteMySqlEntity,
            RepartidorMySqlEntity,
            PedidoMySqlEntity,
            EntradaMySqlEntity,
            PlatoPrincipalMySqlEntity,
            BebidaMySqlEntity,
            PostreMySqlEntity
        ])
    ],
    providers: [
        RepartidorMySqlService,
        ClienteMySqlService,
        TicketMySqlService,
        PedidoMySqlService,
        EntradaMySqlService,
        PlatoPrincipalMySqlService,
        PostreMySqlService,
        BebidaMySqlService,

        RepartidorMySqlRepository,
        ClienteMySqlRepository,
        TicketMySqlRepository,
        PedidoMySqlRepository,
        EntradaMySqlRepository,
        PlatoPrincipalMySqlRepository,
        PostreMySqlRepository,
        BebidaMySqlRepository
    ],
    exports: [
        RepartidorMySqlService,
        ClienteMySqlService,
        TicketMySqlService,
        PedidoMySqlService,
        EntradaMySqlService,
        PlatoPrincipalMySqlService,
        PostreMySqlService,
        BebidaMySqlService,

        RepartidorMySqlRepository,
        ClienteMySqlRepository,
        TicketMySqlRepository,
        PedidoMySqlRepository,
        EntradaMySqlRepository,
        PlatoPrincipalMySqlRepository,
        PostreMySqlRepository,
        BebidaMySqlRepository
    ]
})
export class MySqlModule { }