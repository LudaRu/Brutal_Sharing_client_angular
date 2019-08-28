import {EventEmitter, Injectable} from '@angular/core';
import {Field} from './form.model';
import {FormBuilder, FormControl, FormGroup, ValidatorFn} from '@angular/forms';
import {BehaviorSubject} from 'rxjs/index';
import * as validatorsConf from './validators';

@Injectable()
export class FormCreatorService {
    form;
    public focusChanged$ = new EventEmitter<any>();
    public registerForm$ = new EventEmitter<any>();

    formConfig;
    formData = null;

    constructor(
        private formBuilder: FormBuilder,
    ) {
    }

    // Перехват событий нажития на элементы формы
    changeFocus(event: any): void {
        this.focusChanged$.emit(event);
    }

    // Генерация FormGroup
    public generateForm(formConfig, formData = null): FormGroup {
        this.formConfig = formConfig;
        if (formData) {
            this.formData = formData;
        }

        this.createForm(); // Сохдание формы

        if (this.formData) { // value в форму
            this.form.patchValue(this.formData);
        }

        this.registerForm$.emit(this.form);
        console.log(this.form)
        return this.form;
    }


    public createForm(): void {
        const f = this.formBuilder.group({});
        this.recursControlGenerator(this.formConfig, f);
        this.form = f;
    }

    // Рекурсивная генерация формгруп, для создания дерева
    recursControlGenerator(groupConfig, currentGroup: FormGroup) {
        groupConfig.fields.map((field: Field) => {
            const validators = this.getValidators(field);
            const value = field.value ? field.value : null;
            const fieldName = field.fieldName;

            if (field.fields) { // Вложенный формгруп
                const group = new FormGroup({}, validators);
                this.recursControlGenerator(field, group);
                currentGroup.addControl(fieldName, group);
            } else { // Просто поле
                currentGroup.addControl(fieldName, new FormControl(value, validators));
            }
        });
    }

    private getValidators(field: Field): ValidatorFn[] {
        if (field && field.validators) {
            const valFn: ValidatorFn[] = [];
            field.validators.map(validator => {
                valFn.push(this.getValidatorsByName(validator.name, validator.value));
            });
            return valFn;
        }
        return null;
    }

    getValidatorsByName(name: string, value = null) {
        return validatorsConf.validators[name](value);
    }
}
