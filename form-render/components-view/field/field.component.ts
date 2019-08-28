import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Field} from '../../creator/form.model';
import {FormCreatorService} from '../../creator/form-creator.service';

@Component({
    selector: 'form-field',
    template: `
        <div [ngSwitch]='field.type' *ngIf="modeRead  &&  field.type" class="form-group">
            <div>{{field.value}}</div>
        </div>
        <div [ngSwitch]='field.type' *ngIf="field.type && !modeRead" class="form-group">
            <text-f *ngSwitchCase="'text'" [control]="control" [field]="field" [valid]="control.valid"></text-f>
            <datetime-f *ngSwitchCase="'datetime'" [control]="control" [field]="field" [valid]="control.valid"></datetime-f>
            <!--<div *ngSwitchCase="'check'"><check-f [control]="form.controls[field.fieldName]" [field]="field"></check-f></div>-->
            <!--<div *ngSwitchCase="'select'"><select-f [control]="form.controls[field.fieldName]" [field]="field"></select-f></div>-->
            <!--<div *ngSwitchCase="'radio'"><radio-f [control]="form.controls[field.fieldName]" [field]="field"></radio-f></div>-->
            <div *ngSwitchDefault>{{field.value}}</div>
        </div>

    `,
})
export class FieldComponent implements OnInit {

    @Input() field: Field;
    @Input() control: FormControl;
    @Input() modeRead: false;

    constructor() {
    }

    ngOnInit() {
    }

}
