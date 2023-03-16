import { EsPrecioValido } from "./es-precio-valido.validations";

const validos = [15, 30, 450];

const invalidos = [0, -50, -4];

describe('EsPrecioValido', () => {
    it.each(validos) ('Debería ser un precio', (intento) => {
        // Arange - Preparar
        const precio = intento;
        const expected = true;

        // Act - Actuar
        const result = EsPrecioValido(precio);

        // Assert - Afirmar
        expect(result).toBe(expected);
    });
});

describe('EsPrecioValido', () => {
    it.each(invalidos) ('No debería ser un precio', (intento) => {
        // Arange - Preparar
        const precio = intento;
        const expected = false;

        // Act - Actuar
        const result = EsPrecioValido(precio);

        // Assert - Afirmar
        expect(result).toBe(expected);
    });
});