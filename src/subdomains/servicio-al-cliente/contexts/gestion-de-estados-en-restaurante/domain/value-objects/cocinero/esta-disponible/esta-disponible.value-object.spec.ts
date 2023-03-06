import { EstaDisponibleValueObject } from "./";


const validos = [true, false];

const invalidos = [undefined, null];

describe('EstaDisponible', () => {

    it.each(validos) ('Debería ser válido', (estado) => {
        let estaDisponible = new EstaDisponibleValueObject(estado);

        expect(estaDisponible.hasErrors()).toBeFalsy();
    });

    it.each(invalidos) ('Debería ser inválido', (estado) => {
        let estaDisponible = new EstaDisponibleValueObject(estado);

        expect(estaDisponible.hasErrors()).toBeTruthy();
    });
})