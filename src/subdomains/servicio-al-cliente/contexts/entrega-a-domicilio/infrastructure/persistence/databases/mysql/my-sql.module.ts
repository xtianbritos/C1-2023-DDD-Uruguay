import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmMySqlConfigService } from './configs/type-orm.mysql.service';
import {
    BebidaMySqlEntity,
    EntradaMySqlEntity,
    PedidoMySqlEntity,
    RepartidorMySqlEntity,
    PlatoPrincipalMySqlEntity,
    PostreMySqlEntity,
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
        TicketMySqlService,
        TicketMySqlRepository,

        RepartidorMySqlService,
        RepartidorMySqlRepository,
        
        ClienteMySqlService,
        ClienteMySqlRepository,
        
        PedidoMySqlService,
        PedidoMySqlRepository,
        
        EntradaMySqlService,
        EntradaMySqlRepository,
        
        PlatoPrincipalMySqlService,
        PlatoPrincipalMySqlRepository,
        
        PostreMySqlService,
        PostreMySqlRepository,
        
        BebidaMySqlService,
        BebidaMySqlRepository
    ],
    exports: [
        TicketMySqlService,
        TicketMySqlRepository,

        RepartidorMySqlService,
        RepartidorMySqlRepository,
        
        ClienteMySqlService,
        ClienteMySqlRepository,
        
        PedidoMySqlService,
        PedidoMySqlRepository,
        
        EntradaMySqlService,
        EntradaMySqlRepository,
        
        PlatoPrincipalMySqlService,
        PlatoPrincipalMySqlRepository,
        
        PostreMySqlService,
        PostreMySqlRepository,
        
        BebidaMySqlService,
        BebidaMySqlRepository
    ]
})
export class MySqlModule { }