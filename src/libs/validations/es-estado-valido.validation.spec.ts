import { EsEstadoValido } from './es-estado-valido.validations';


const validos = ["preparándose", "listo", "en camino"];

const invalidos = ["", "123", "esto no es un estado válido"];


describe('EsEstadoValido', () => {
    let validador: typeof EsEstadoValido;
  
    // Antes de todas las pruebas
    beforeAll(() => {});
  
    // Antes de cada prueba
    beforeEach(() => {
      // Arrange
      validador = EsEstadoValido;
    });
  
  
    it('esto debería definir la función', () => {
      // Assert
      expect(validador).toBeDefined();
    });
  
  
    it.each(validos) ('debería ser verdadero', (intento) => {
      // Arrange
      const estado = intento;
      const expected = true;
  
      // Act
      const result = validador(estado);
  
      // Assert
      expect(result).toEqual(expected);
    })
  
  
    it.each(invalidos) ('debería ser falso', (intento) => {
      // Arrange
      const estado = intento;
      const expected = false;
  
      // Act
      const result = validador(estado);
  
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
  