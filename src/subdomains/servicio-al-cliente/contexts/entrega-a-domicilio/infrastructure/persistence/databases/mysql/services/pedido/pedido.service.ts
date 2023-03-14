import { Injectable } from "@nestjs/common";

import {
    EntradaMySqlEntity,
    BebidaMySqlEntity,
    PlatoPrincipalMySqlEntity,
    PostreMySqlEntity,
    PedidoMySqlEntity
} from "../../entities/pedido";

import { IPedidoDomainService } from "../../../../../../domain/services";
import {
    BebidaMySqlRepository,
    EntradaMySqlRepository,
    PedidoMySqlRepository,
    PlatoPrincipalMySqlRepository,
    PostreMySqlRepository
} from '../../repositories/pedido';


@Injectable()
export class PedidoMySqlService
    implements IPedidoDomainService<PedidoMySqlEntity> {

    constructor(
        private readonly pedidoRepository: PedidoMySqlRepository,
        private readonly entradaRepository: EntradaMySqlRepository,
        private readonly postreRepository: PostreMySqlRepository,
        private readonly platoPrincipalRepository: PlatoPrincipalMySqlRepository,
        private readonly bebidaRepository: BebidaMySqlRepository,
    ) { }


    crearPedido(pedido: PedidoMySqlEntity): Promise<PedidoMySqlEntity> {
        return this.pedidoRepository.create(pedido);
    }
    
    obtenerPedido(pedidoId: string): Promise<PedidoMySqlEntity> {
        return this.pedidoRepository.findById(pedidoId);
    }

    cambiarEstadoPedido(pedidoId: string, nuevoEstado: string): Promise<string> {
        return this.pedidoRepository.updateEstado(pedidoId, nuevoEstado);
    }

    cambiarPrecioPedido(pedidoId: string, nuevoPrecio: number): Promise<number> {
        return this.pedidoRepository.updatePrecio(pedidoId, nuevoPrecio);
    }


    crearEntrada(entrada: EntradaMySqlEntity): Promise<EntradaMySqlEntity> {
        // return this.entradaRepository.crearEntrada(entrada);
        throw new Error();
    }

    cambiarNombreEntrada(entradaId: string, nuevoNombre: string): Promise<string> {
        // return this.entradaRepository.cambiarNombre(entradaId, nuevoNombre);
        throw new Error();
    }

    crearPlatoPrincipal(platoPrincipal: PlatoPrincipalMySqlEntity): Promise<PlatoPrincipalMySqlEntity> {
        // return this.platoPrincipalRepository.crearPlatoPrincipal(platoPrincipal);
        throw new Error();
    }

    cambiarNombrePlatoPrincipal(platoPrincipalId: string, nuevoNombre: string): Promise<string> {
        // return this.platoPrincipalRepository.cambiarNombre(platoPrincipalId, nuevoNombre);
        throw new Error();
    }

    cambiarGuarnicionPlatoPrincipal(platoPrincipalId: string, nuevaGuarnicion: string): Promise<string> {
        // return this.platoPrincipalRepository.cambiarGuarnicion(platoPrincipalId, nuevaGuarnicion);
        throw new Error();
    }

    crearBebida(bebida: BebidaMySqlEntity): Promise<BebidaMySqlEntity> {
        // return this.bebidaRepository.crearBebida(bebida);
        throw new Error();
    }

    obtenerBebida(bebidaId: string): Promise<BebidaMySqlEntity> {
        // return this.bebidaRepository.obtenerBebida(bebidaId);
        throw new Error();
    }

    cambiarNombreBebida(bebidaId: string, nuevoNombre: string): Promise<string> {
        // return this.bebidaRepository.cambiarNombre(bebidaId, nuevoNombre);
        throw new Error();
    }

    cambiarTamañoBebida(bebidaId: string, nuevoTamaño: string): Promise<string> {
        // return this.bebidaRepository.cambiarTamaño(bebidaId, nuevoTamaño);
        throw new Error();
    }

    crearPostre(postre: PostreMySqlEntity): Promise<PostreMySqlEntity> {
        // return this.postreRepository.crearPostre(postre);
        throw new Error();
    }

    cambiarNombrePostre(postreId: string, nuevoNombre: string): Promise<string> {
        // return this.postreRepository.cambiarNombre(postreId, nuevoNombre);
        throw new Error();
    }

    cambiarTamañoPostre(postreId: string, nuevoTamaño: string): Promise<string> {
        // return this.postreRepository.cambiarTamaño(postreId, nuevoTamaño);
        throw new Error();
    }

    cambiarPostreEsPAraVeganos(postreId: string, nuevoEstado: boolean): Promise<boolean> {
        // return this.postreRepository.cambiarEsParaVeganos(postreId, nuevoEstado);
        throw new Error();
    }

}