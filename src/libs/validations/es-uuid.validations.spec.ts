import { v4 as uuid } from 'uuid';
import { EsUuid } from './es-uuid.validations';

const validos = ['6650e6dd-b7cc-4426-af2c-0bb2730337e1', uuid()];

const invalidos = ['1', '123-a' , 'abcD', '6650e6dd-b7cc-4426-af2c-0bb2730337e@'];

describe('EsUuid', () => {
    it.each(validos) ('Debería ser un uuid v4', (intento) => {
        // Arange - Preparar
        const uuid = intento;
        const expected = true;

        // Act - Actuar
        const result = EsUuid(uuid);

        // Assert - Afirmar
        expect(result).toBe(true);
    });
});

describe('EsUuid', () => {
    it.each(invalidos) ('No debería ser un uuid v4', (intento) => {
        // Arange - Preparar
        const uuid = intento;
        const expected = false;

        // Act - Actuar
        const result = EsUuid(uuid);

        // Assert - Afirmar
        expect(result).toBe(false);
    });
});