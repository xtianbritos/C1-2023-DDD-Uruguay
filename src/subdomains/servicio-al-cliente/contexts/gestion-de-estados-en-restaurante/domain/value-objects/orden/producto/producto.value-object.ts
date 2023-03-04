import { EsStringAlfabetico, LongitudMaxima, LongitudMinima } from '../../../../../../../../libs/validations';
import { ValueObjectBase } from '../../../../../../../../libs/sofka/bases';
import { IErrorValueObject } from '../../../../../../../../libs/sofka/interface';

export class ProductoValueObject extends ValueObjectBase<string> {
    
    constructor(value: string) {
        super(value);
    }

    /**
     *Funsión que realiza todas las validaciones
     *
     * @memberof ProductoValueObject
     */
    validateData(): void {
        this.validarStringAlfabetico();
        this.validarLongitudMinima(4);
        this.validarLongitudMaxima(40);
    }

    /**
     *Funsión que valida que el producto sea un string alfabético
     *
     * @private
     * @memberof ProductoValueObject
     */
    private validarStringAlfabetico(): void {
        if(EsStringAlfabetico(this.value) === false) {

            const error: IErrorValueObject = {
                field: 'Producto',
                message: 'El valor no es un producto válido'
            };

            this.setError(error);
        }
    }

    /**
     *Funsión que valida la longitud mínima de un producto
     *
     * @private
     * @param {number} longitud
     * @memberof ProductoValueObject
     */
     private validarLongitudMinima(longitud: number): void {
        if(LongitudMinima(this.value, longitud) === false) {

            const error: IErrorValueObject = {
                field: 'Producto',
                message: 'El producto debe tener una longitud mínima de '+longitud+' caracteres'
            };

            this.setError(error);
        }
    }

    /**
     *Funsión que valida la longitud máxima de un producto
     *
     * @private
     * @param {number} longitud
     * @memberof ProductoValueObject
     */
     private validarLongitudMaxima(longitud: number): void {
        if(LongitudMaxima(this.value, longitud) === false) {

            const error: IErrorValueObject = {
                field: 'Producto',
                message: 'El producto debe tener una longitud máxima de '+longitud+' caracteres'
            };

            this.setError(error);
        }
    }
}