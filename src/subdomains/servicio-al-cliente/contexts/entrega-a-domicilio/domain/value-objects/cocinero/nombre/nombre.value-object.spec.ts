import { NombreValueObject } from "./";


const validos = ['Christian', 'Christian Britos','Christian Emmanuel Britos Merello'];

const invalidos = ['123', '123abc', 'Abcd', '123456 890123456a', 'Christian1'];

describe('Nombre', () => {

    it.each(validos) ('Debería ser válido', (palabra) => {
        let cocineroNombre = new NombreValueObject(palabra);

        expect(cocineroNombre.hasErrors()).toBeFalsy();
    });

    it.each(invalidos) ('Debería ser inválido', (palabra) => {
        let cocineroNombre = new NombreValueObject(palabra);

        expect(cocineroNombre.hasErrors()).toBeTruthy();
    });
})