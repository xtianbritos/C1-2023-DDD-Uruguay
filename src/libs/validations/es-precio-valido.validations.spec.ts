import { EsPrecioValido } from "./es-precio-valido.validations";


const validos = [1, 30, 450];

const invalidos = [0, -50, -4];


describe('EsPrecioValido', () => {
    let validador: typeof EsPrecioValido;
  
    // Antes de todas las pruebas
    beforeAll(() => {});
  
    // Antes de cada prueba
    beforeEach(() => {
      // Arrange
      validador = EsPrecioValido;
    });
  
  
    it('esto debería definir la función', () => {
      // Assert
      expect(validador).toBeDefined();
    });
  
  
    it.each(validos) ('debería ser verdadero', (intento) => {
      // Arrange
      const precio = intento;
      const expected = true;
  
      // Act
      const result = validador(precio);
  
      // Assert
      expect(result).toEqual(expected);
    })
  
  
    it.each(invalidos) ('debería ser falso', (intento) => {
      // Arrange
      const precio = intento;
      const expected = false;
  
      // Act
      const result = validador(precio);
  
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
  