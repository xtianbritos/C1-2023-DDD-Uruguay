import { EsGuarnicionValida } from "./es-guarnicion-valida.validations";

const validos = ["arroz", "papas fritas", "puré de papas", "ensalada", "pan"];

const invalidos = ["", "123", "esto no es una guarnicion válido"];

describe('EsGuarnicionValida', () => {
    it.each(validos) ('Debería ser una guarnicion', (intento) => {
        // Arange - Preparar
        const guarnicion = intento;
        const expected = true;

        // Act - Actuar
        const result = EsGuarnicionValida(guarnicion);

        // Assert - Afirmar
        expect(result).toBe(expected);
    });
});

describe('EsGuarnicionValida', () => {
    it.each(invalidos) ('No debería ser una guarnicion', (intento) => {
        // Arange - Preparar
        const guarnicion = intento;
        const expected = false;

        // Act - Actuar
        const result = EsGuarnicionValida(guarnicion);

        // Assert - Afirmar
        expect(result).toBe(expected);
    });
});