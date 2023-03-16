import { EsDireccion } from "./es-direccion.validations";


const validos = ["Calle 123", "Herrera y Benito Chaín 097"];

const invalidos = ["1", "", "calle @%$a"];


describe('EsDireccion', () => {
  let validador: typeof EsDireccion;

  // Antes de todas las pruebas
  beforeAll(() => {});

  // Antes de cada prueba
  beforeEach(() => {
    // Arrange
    validador = EsDireccion;
  });


  it('esto debería definir la función', () => {
    // Assert
    expect(validador).toBeDefined();
  });


  it.each(validos) ('debería ser verdadero', (intento) => {
    // Arrange
    const direccion = intento;
    const expected = true;

    // Act
    const result = validador(direccion);

    // Assert
    expect(result).toEqual(expected);
  })


  it.each(invalidos) ('debería ser falso', (intento) => {
    // Arrange
    const direccion = intento;
    const expected = false;

    // Act
    const result = validador(direccion);

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
