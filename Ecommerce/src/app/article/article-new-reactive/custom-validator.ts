
import {ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidator {
    static NameArticleValidator(names : string[]) : ValidatorFn{
        return (control : AbstractControl):{ [key: string]: any } | null => {
            if(control.value !== null){
                const isInvalid = names.includes(control.value.toLowerCase());
                return isInvalid ? {invalidName: true} : null;
            }
            return null;
        };
    
      }
}
