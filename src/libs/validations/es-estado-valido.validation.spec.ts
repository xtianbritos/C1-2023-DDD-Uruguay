import { EsEstadoValido } from './es-estado-valido.validations';

const validos = ["preparándose", "listo", "en camino"];

const invalidos = ["", "123", "esto no es un estado válido"];

describe('EsEstadoValido', () => {
    it.each(validos) ('Debería ser un estado', (intento) => {
        // Arange - Preparar
        const estado = intento;
        const expected = true;

        // Act - Actuar
        const result = EsEstadoValido(estado);

        // Assert - Afirmar
        expect(result).toBe(expected);
    });
});

describe('EsEstadoValido', () => {
    it.each(invalidos) ('No debería ser un estado', (intento) => {
        // Arange - Preparar
        const estado = intento;
        const expected = false;

        // Act - Actuar
        const result = EsEstadoValido(estado);

        // Assert - Afirmar
        expect(result).toBe(expected);
    });
});