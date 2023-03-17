import { v4 as uuid } from 'uuid';

import { PedidoIdValueObject } from './';


const validos = [undefined, '6650e6dd-b7cc-4426-af2c-0bb2730337e1', uuid()];

const invalidos = ['1', '123-a' , 'abcD', '6650e6dd-b7cc-4426-af2c-0bb2730337e@'];


describe('PlatoPrincipalId', () => {

    let valueObject: PedidoIdValueObject;

    beforeEach(() => {
        valueObject = new PedidoIdValueObject();
    });


    it('Debería ser una instancia', () => {
        expect(valueObject).toBeDefined();
    });


    it.each(validos) ('Debería ser válido', (intento) => {
        // Arrange
        const expectedHasErrors = false;
        const data = intento;
        
        // Act
        let pedidoId = new PedidoIdValueObject(data);

        // Assert
        expect(pedidoId.hasErrors()).toBe(expectedHasErrors);
    });


    it.each(invalidos) ('Debería ser inválido', (intento) => {
        // Arrange
        const expectedMessage = 'El id no tiene una estructura válida UUIDV4';
        const expectedHasErrors = true;
        const data = intento;
        
        // Act
        let pedidoId = new PedidoIdValueObject(data);

        // Assert
        expect(pedidoId.hasErrors()).toBe(expectedHasErrors);
        expect(pedidoId.getErrors()[0].message).toBe(expectedMessage);
    });
})