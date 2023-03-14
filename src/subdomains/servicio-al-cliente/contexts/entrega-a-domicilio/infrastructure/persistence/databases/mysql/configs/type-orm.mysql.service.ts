import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from "@nestjs/typeorm";
import {
    BebidaMySqlEntity,
    ClienteMySqlEntity,
    EntradaMySqlEntity,
    PedidoMySqlEntity,
    PlatoPrincipalMySqlEntity,
    PostreMySqlEntity,
    RepartidorMySqlEntity,
    TicketMySqlEntity
} from "../entities";

@Injectable()
export class TypeOrmMySqlConfigService implements TypeOrmOptionsFactory {

    constructor(private readonly configService: ConfigService) { }

    createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'cartoon6',
            database: 'ddd_db',
            entities: [
                TicketMySqlEntity,
                ClienteMySqlEntity,
                RepartidorMySqlEntity,
                PedidoMySqlEntity,
                EntradaMySqlEntity,
                PostreMySqlEntity,
                PlatoPrincipalMySqlEntity,
                BebidaMySqlEntity
            ],
            synchronize: true,
        }
    }
}