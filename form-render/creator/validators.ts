import {AbstractControl, Validators} from '@angular/forms';

export const validators = {
    required:  (v) => {
        return Validators.required;
    },
};
