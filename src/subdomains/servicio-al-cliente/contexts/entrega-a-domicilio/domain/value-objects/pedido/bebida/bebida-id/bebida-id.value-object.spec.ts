jest.mock('@validations')

import { BebidaIdValueObject } from "."
import * as validadores from '@validations';

describe('BebidaIdValueObject', () => {
    let valueObject: BebidaIdValueObject;

    beforeEach(() => {
        valueObject = new BebidaIdValueObject();

        jest.spyOn(validadores, 'EsUuid').mockImplementation(data => {
            switch(data){
                case 'e6e1974a-c7f3-45be-9105-31ef44d53cee':
                    return true
                case undefined:
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
            const expected = 'e6e1974a-c7f3-45be-9105-31ef44d53cee';
            const data = 'e6e1974a-c7f3-45be-9105-31ef44d53cee';

            //Act
            valueObject = new BebidaIdValueObject(data)
            const result = valueObject.valueOf();
            valueObject.validateData()

            //Assert
            expect(validadores.EsUuid).toHaveBeenCalledWith(data)
            expect(valueObject.hasErrors()).toBe(false)
            expect(result).toBe(expected)

        })
    })
    describe('checking the value of the object', () => {

        it('should return an error expected data', () => {

            //Arrange
            const expected = 'El id no tiene una estructura válida UUIDV4';
            const expectedError = true;
            const data = '1';

            //Act
            valueObject = new BebidaIdValueObject(data)

            //Assert
            expect(validadores.EsUuid).toHaveBeenCalled()
            expect(valueObject.hasErrors()).toBe(expectedError)
            expect(valueObject.getErrors()[0].message).toBe(expected)

        })
    })
})