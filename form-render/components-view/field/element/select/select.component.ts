import {Component, OnInit, Input, ViewEncapsulation, SimpleChanges} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {FormCreatorService} from '../../../../creator/form-creator.service';
import {Field} from '../../../../creator/form.model';

@Component({
    selector: 'select-f',
    template: `
      <select (focus)="onFocus()" (blur)="onBlur()" [formControl]="control">
        <option *ngFor="let option of options" [value]="option.key">
          {{option.value}}
        </option>
      </select>
    `,
    styleUrls: ['./select.component.css'],
})
export class SelectFieldComponent implements OnInit {
    @Input() control: AbstractControl;
    @Input() field: Field;

    options: any;

    constructor(private service: FormCreatorService) {
    }

    ngOnInit() {
        this.options = this.field.options;

        // this.control.valueChanges.distinctUntilChanged().subscribe(res => {
        // });
    }


    onFocus(): void {
        this.service.changeFocus({'field': this.field, 'event': 'focus'});
    }

    onBlur(): void {
        this.service.changeFocus({'field': this.field, 'event': 'blur'});
    }

    clearField(): void {
        this.control.setValue('');
    }

}
