import { EsNombre } from "./es-nombre.validations";

const validos = ["Pepe", "David Martinez", "José"];

const invalidos = ["1", "", "pepe @%$a"];

describe('EsNombre', () => {
    it.each(validos) ('Debería ser un nombre', (intento) => {
        // Arange - Preparar
        const nombre = intento;
        const expected = true;

        // Act - Actuar
        const result = EsNombre(nombre);

        // Assert - Afirmar
        expect(result).toBe(expected);
    });
});

describe('EsNombre', () => {
    it.each(invalidos) ('No debería ser un nombre', (intento) => {
        // Arange - Preparar
        const nombre = intento;
        const expected = false;

        // Act - Actuar
        const result = EsNombre(nombre);

        // Assert - Afirmar
        expect(result).toBe(expected);
    });
});