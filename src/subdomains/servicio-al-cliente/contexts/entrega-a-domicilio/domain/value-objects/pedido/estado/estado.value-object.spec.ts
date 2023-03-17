jest.mock('@validations')

import { EstadoValueObject } from "."
import * as validadores from '@validations';

describe('EstadoValueObject', () => {
    let valueObject: EstadoValueObject;
    let estado: string = "preparándose";

    beforeEach(() => {
        valueObject = new EstadoValueObject(estado);

        jest.spyOn(validadores, 'EsEstadoValido').mockImplementation(data => {
            switch(data){
                case 'listo':
                    return true
                case "preparándose":
                    return true
                default:
                    return false
            }
        })
    });

    it('should create an instance', () => {
        expect(valueObject).toBeDefined();
    })

    describe('checking the value of the object', () => {

        it('should return the expected data', () => {

            //Arrange
            const expected = 'listo';
            const data = 'listo';

            //Act
            valueObject = new EstadoValueObject(data)
            const result = valueObject.valueOf();
            valueObject.validateData()

            //Assert
            expect(validadores.EsEstadoValido).toHaveBeenCalledWith(data)
            expect(valueObject.hasErrors()).toBe(false)
            expect(result).toBe(expected)

        })
    })
    describe('checking the value of the object', () => {

        it('should return an error expected data', () => {

            //Arrange
            const expected = 'El valor no es un estado de pedido válido';
            const expectedError = true;
            const data = '1';

            //Act
            valueObject = new EstadoValueObject(data)

            //Assert
            expect(validadores.EsEstadoValido).toHaveBeenCalled()
            expect(valueObject.hasErrors()).toBe(expectedError)
            expect(valueObject.getErrors()[0].message).toBe(expected)

        })
    })
})