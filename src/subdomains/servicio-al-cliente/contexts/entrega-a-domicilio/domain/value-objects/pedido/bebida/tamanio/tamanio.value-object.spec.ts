jest.mock('@validations')

import { TamanioValueObject } from "."
import * as validadores from '@validations';

describe('TamanioValueObject', () => {
    let valueObject: TamanioValueObject;
    let tamanio: string = "grande"

    beforeEach(() => {
        valueObject = new TamanioValueObject(tamanio);

        jest.spyOn(validadores, 'EsTamanioValido').mockImplementation(data => {
            switch(data){
                case 'mediano':
                    return true
                case 'grande':
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
            const expected = 'grande';
            const data = 'grande';

            //Act
            valueObject = new TamanioValueObject(data)
            const result = valueObject.valueOf();
            valueObject.validateData()

            //Assert
            expect(validadores.EsTamanioValido).toHaveBeenCalledWith(data)
            expect(valueObject.hasErrors()).toBe(false)
            expect(result).toBe(expected)

        })
    })
    describe('checking the value of the object', () => {

        it('should return an error expected data', () => {

            //Arrange
            const expected = 'El valor no es un tamaño válido';
            const expectedError = true;
            const data = '1';

            //Act
            valueObject = new TamanioValueObject(data)

            //Assert
            expect(validadores.EsTamanioValido).toHaveBeenCalled()
            expect(valueObject.hasErrors()).toBe(expectedError)
            expect(valueObject.getErrors()[0].message).toBe(expected)

        })
    })
})