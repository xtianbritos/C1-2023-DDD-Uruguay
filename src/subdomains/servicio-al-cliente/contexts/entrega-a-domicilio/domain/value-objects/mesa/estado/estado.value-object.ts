import { EsEstadoMesa } from '../../../../../../../../libs/validations';
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
        this.validarEsEstadoMesa();
    }

    /**
     *Funsión que valida que el estado sea uno de los permitidos para una orden
     *
     * @private
     * @memberof EstadoValueObject
     */
    private validarEsEstadoMesa(): void {
        if(EsEstadoMesa(this.value) === false) {

            const error: IErrorValueObject = {
                field: 'Estado',
                message: 'El valor no es un estado de mesa válido'
            };

            this.setError(error);
        }
    }
    
}