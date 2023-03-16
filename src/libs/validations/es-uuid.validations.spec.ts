import { v4 as uuid } from 'uuid';

import { EsUuid } from './es-uuid.validations';


const validos = ['6650e6dd-b7cc-4426-af2c-0bb2730337e1', uuid()];

const invalidos = ['1', '123-a' , 'abcD', '6650e6dd-b7cc-4426-af2c-0bb2730337e@'];


describe('EsUuid', () => {
    let validador: typeof EsUuid;
  
    // Antes de todas las pruebas
    beforeAll(() => {});
  
    // Antes de cada prueba
    beforeEach(() => {
      // Arrange
      validador = EsUuid;
    });
  
  
    it('esto debería definir la función', () => {
      // Assert
      expect(validador).toBeDefined();
    });
  
  
    it.each(validos) ('debería ser verdadero', (intento) => {
      // Arrange
      const uuid = intento;
      const expected = true;
  
      // Act
      const result = validador(uuid);
  
      // Assert
      expect(result).toEqual(expected);
    })
  
  
    it.each(invalidos) ('debería ser falso', (intento) => {
      // Arrange
      const uuid = intento;
      const expected = false;
  
      // Act
      const result = validador(uuid);
  
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
  