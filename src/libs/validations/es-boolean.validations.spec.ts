import { EsBoolean } from './es-boolean.validations';

const validos = [true, false];

const invalidos = [1, 'true', {}];

describe('EsBoolean', () => {
    it.each(validos) ('Debería ser un boolean', (intento) => {
        // Arange - Preparar
        const booleano = intento;
        const expected = true;

        // Act - Actuar
        const result = EsBoolean(booleano);

        // Assert - Afirmar
        expect(result).toBe(expected);
    });
});

describe('EsBoolean', () => {
    it.each(invalidos) ('No debería ser un boolean', (intento) => {
        // Arange - Preparar
        const booleano = intento;
        const expected = false;

        // Act - Actuar
        const result = EsBoolean(booleano);

        // Assert - Afirmar
        expect(result).toBe(expected);
    });
});