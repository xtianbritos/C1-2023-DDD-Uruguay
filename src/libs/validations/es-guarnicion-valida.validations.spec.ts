import { EsGuarnicionValida } from "./es-guarnicion-valida.validations";


const validos = ["arroz", "papas fritas", "puré de papas", "ensalada", "pan"];

const invalidos = ["", "123", "esto no es una guarnición válida"];


describe('EsGuarnicionValida', () => {
    let validador: typeof EsGuarnicionValida;
  
    // Antes de todas las pruebas
    beforeAll(() => {});
  
    // Antes de cada prueba
    beforeEach(() => {
      // Arrange
      validador = EsGuarnicionValida;
    });
  
  
    it('esto debería definir la función', () => {
      // Assert
      expect(validador).toBeDefined();
    });
  
  
    it.each(validos) ('debería ser verdadero', (intento) => {
      // Arrange
      const guarnicion = intento;
      const expected = true;
  
      // Act
      const result = validador(guarnicion);
  
      // Assert
      expect(result).toEqual(expected);
    })
  
  
    it.each(invalidos) ('debería ser falso', (intento) => {
      // Arrange
      const guarnicion = intento;
      const expected = false;
  
      // Act
      const result = validador(guarnicion);
  
      // Assert
      expect(result).toEqual(expected);
    })
  
  
    // Despues de cada prueba
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    // Despues de todas las pruebas
    afterAll(() => {
      jest.restoreAllMocks();
    });
  });
  