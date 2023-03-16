import { EsDireccion } from "./es-direccion.validations";

const validos = ["Calle 123", "Herrera y Benito Chaín 097"];

const invalidos = ["1", "", "calle @%$a"];

describe('EsDireccion', () => {
    it.each(validos) ('Debería ser una dirección', (intento) => {
        // Arange - Preparar
        const direccion = intento;
        const expected = true;

        // Act - Actuar
        const result = EsDireccion(direccion);

        // Assert - Afirmar
        expect(result).toBe(expected);
    });
});

describe('EsDireccion', () => {
    it.each(invalidos) ('No debería ser una dirección', (intento) => {
        // Arange - Preparar
        const direccion = intento;
        const expected = false;

        // Act - Actuar
        const result = EsDireccion(direccion);

        // Assert - Afirmar
        expect(result).toBe(expected);
    });
});