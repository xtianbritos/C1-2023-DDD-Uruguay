import { v4 as uuid } from 'uuid';
import { EsBoolean } from './es-boolean.validations';

const validos = [true, false];

const invalidos = [1, 'true', {}];

describe('EsBoolean', () => {
    it.each(validos) ('Debería ser un boolean', (intento) => {
        // Arange - Preparar
        const boleano = intento;
        const expected = true;

        // Act - Actuar
        const result = EsBoolean(boleano);

        // Assert - Afirmar
        expect(result).toBe(true);
    });
});

describe('EsBoolean', () => {
    it.each(invalidos) ('No debería ser un boolean', (intento) => {
        // Arange - Preparar
        const boleano = intento;
        const expected = false;

        // Act - Actuar
        const result = EsBoolean(boleano);

        // Assert - Afirmar
        expect(result).toBe(false);
    });
});