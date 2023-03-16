import { EsNombre } from "./es-nombre.validations";


const validos = ["Pepe", "David Martinez", "José"];

const invalidos = ["1", "", "pepe @%$a"];


describe('EsNombre', () => {
    let validador: typeof EsNombre;
  
    // Antes de todas las pruebas
    beforeAll(() => {});
  
    // Antes de cada prueba
    beforeEach(() => {
      // Arrange
      validador = EsNombre;
    });
  
  
    it('esto debería definir la función', () => {
      // Assert
      expect(validador).toBeDefined();
    });
  
  
    it.each(validos) ('debería ser verdadero', (intento) => {
      // Arrange
      const nombre = intento;
      const expected = true;
  
      // Act
      const result = validador(nombre);
  
      // Assert
      expect(result).toEqual(expected);
    })
  
  
    it.each(invalidos) ('debería ser falso', (intento) => {
      // Arrange
      const nombre = intento;
      const expected = false;
  
      // Act
      const result = validador(nombre);
  
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
  