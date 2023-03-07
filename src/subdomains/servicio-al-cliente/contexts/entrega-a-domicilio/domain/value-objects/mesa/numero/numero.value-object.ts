import { EsNumberValido } from '../../../../../../../../libs/validations';
import { ValueObjectBase } from '../../../../../../../../libs/sofka/bases';
import { IErrorValueObject } from '../../../../../../../../libs/sofka/interface';


export class NumeroValueObject extends ValueObjectBase<number> {

    constructor(value: number) {
        super(value);
    }
    
    /**
     *Funsión que realiza todas las validaciones
     *
     * @memberof NumeroValueObject
     */
    validateData(): void {
        this.validarNumero();
    }


    /**
     *Funsión que valida que un valor sea un número de mesa válido
     *
     * @private
     * @memberof NumeroValueObject
     */
    private validarNumero(): void {
        if( EsNumberValido(this.value) === false) {

            const error: IErrorValueObject = {
                field: 'Numero',
                message: 'El valor no es un número de mesa válido'
            };

            this.setError(error);
        }
    }
    
}