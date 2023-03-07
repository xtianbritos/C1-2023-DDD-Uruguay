import { EsEstadoOrden } from '../../../../../../../../libs/validations';
import { ValueObjectBase } from '../../../../../../../../libs/sofka/bases';
import { IErrorValueObject } from '../../../../../../../../libs/sofka/interface';


export class EstadoValueObject extends ValueObjectBase<string> {

    constructor(value: string) {
        super(value);
    }
    
    /**
     *Funsión que realiza todas las validaciones
     *
     * @memberof EstadoValueObject
     */
    validateData(): void {
        this.validarEsEstadoOrden();
    }

    /**
     *Funsión que valida que el estado sea uno de los permitidos para una orden
     *
     * @private
     * @memberof EstadoValueObject
     */
    private validarEsEstadoOrden(): void {
        if(EsEstadoOrden(this.value) === false) {

            const error: IErrorValueObject = {
                field: 'Estado',
                message: 'El valor no es un estado de orden válido'
            };

            this.setError(error);
        }
    }
    
}