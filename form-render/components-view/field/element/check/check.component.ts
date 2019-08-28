import {Component, OnInit, Input} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {FormCreatorService} from '../../../../creator/form-creator.service';
import {Field, FieldOption} from '../../../../creator/form.model';

@Component({
    selector: 'check-f',
    template: `
      <p *ngFor="let option of field.options">
        <label (focus)="onFocus()">
          <input name="{{option.key}}" type="checkbox" (change)="onChange(option.key, $event.target.checked)">
          <span>{{getValue(option)}}</span>
        </label>
      </p>
    `,
    styleUrls: ['./checkbox.component.css']
})
export class CheckFieldComponent implements OnInit {
    @Input() field: Field;
    @Input() control: AbstractControl;

    constructor(private service: FormCreatorService) {
    }

    ngOnInit() {
        // this.control.valueChanges.distinctUntilChanged().subscribe(res => {
        //     if (res) {
        //         this.service.modifyForm(this.field);
        //     }
        // });
    }

    onFocus(): void {
    }

    onChange(key, isChecked: boolean) {
        let arr = this.control.value ? this.control.value : [];
        if (isChecked) {
            arr.push(key);
        } else {
            arr = arr.filter((item) => {
                return item !== key;
            });
        }
        this.control.setValue(this.arrayNull(arr));
    }

    protected arrayNull(arr) {
        return (arr.length > 0) ? arr : null;
    }


    // Ф-ции темплейта
    getValue(v: FieldOption | any) {
        return (v.value !== undefined) ? v.value : v.key;
    }

}
