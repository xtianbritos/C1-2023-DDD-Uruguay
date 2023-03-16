import { EsBoolean } from './es-boolean.validations';


const validos = [true, false];

const invalidos = [1, 'true', {}];


describe('EsBoolean', () => {
  let validador: typeof EsBoolean;

  // Antes de todas las pruebas
  beforeAll(() => {});

  // Antes de cada prueba
  beforeEach(() => {
    // Arrange
    validador = EsBoolean;
  });


  it('esto debería definir la función', () => {
    // Assert
    expect(validador).toBeDefined();
  });


  it.each(validos) ('debería ser verdadero', (intento) => {
    // Arrange
    const booleano = intento;
    const expected = true;

    // Act
    const result = validador(booleano);

    // Assert
    expect(result).toEqual(expected);
  })


  it.each(invalidos) ('debería ser falso', (intento) => {
    // Arrange
    const booleano = intento;
    const expected = false;

    // Act
    const result = validador(booleano);

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
