import { v4 as uuid } from 'uuid';

import { CocineroIdValueObject } from "./";


const validos = [undefined, '6650e6dd-b7cc-4426-af2c-0bb2730337e1', uuid()];

const invalidos = ['1', '123-a' , 'abcD', '6650e6dd-b7cc-4426-af2c-0bb2730337e@'];

describe('CocineroId', () => {

    it.each(validos) ('Debería ser válido', (palabra) => {
        let cocineroId = new CocineroIdValueObject(palabra);
        expect(cocineroId.hasErrors()).toBeFalsy();
    });

    it.each(invalidos) ('Debería ser inválido', (palabra) => {
        let cocineroId = new CocineroIdValueObject(palabra);

        expect(cocineroId.hasErrors()).toBeTruthy();
    });
})