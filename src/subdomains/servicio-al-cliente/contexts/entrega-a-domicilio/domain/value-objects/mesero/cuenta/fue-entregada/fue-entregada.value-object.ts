import { EsBoolean } from '../../../../../../../../../libs/validations';
import { ValueObjectBase } from '../../../../../../../../../libs/sofka/bases';
import { IErrorValueObject } from '../../../../../../../../../libs/sofka/interface';


export class FueEntregadaValueObject extends ValueObjectBase<boolean> {

    constructor(value: boolean) {
        super(value);
    }

    /**
     *Funsión que realiza todas las validaciones
     *
     * @memberof FueEntregadaValueObject
     */
    validateData(): void {
        this.validarBoolean();
    }

    /**
     *Funsión que valida un dato sea booleano
     *
     * @private
     * @memberof FueEntregadaValueObject
     */
    private validarBoolean(): void {
        if(EsBoolean(this.value) === false) {

            const error: IErrorValueObject = {
                field: 'FueEntregada',
                message: 'El valor no es un booleano'
            };

            this.setError(error);
        }
    }
    
}