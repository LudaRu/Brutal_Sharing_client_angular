import {Component, OnInit, Input} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {Field} from '../../../../creator/form.model';

@Component({
    selector: 'app-radio-f',
    template: `
      <input type="radio">
    `,
    styleUrls: ['./radio.component.css']
})

export class RadioFieldComponent implements OnInit {
    @Input() control: AbstractControl;
    @Input() field: Field;

    options: any;

    constructor() {
    }

    ngOnInit() {
        this.options = this.field.options;
    }
}
