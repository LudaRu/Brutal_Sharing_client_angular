import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {AbstractControl, Validators} from '@angular/forms';
import {FormCreatorService} from '../../../../creator/form-creator.service';
import {distinctUntilChanged} from 'rxjs/operators';
import {Field} from '../../../../creator/form.model';

@Component({
    selector: 'text-f',
    template: `
        <input class="form-control" [formControl]="control" (focus)="onFocus()" (blur)="onBlur()" type="text" [class.is-invalid]="!valid">
        <div class="invalid-feedback">Не валидно</div>
    `,
    styleUrls: ['./text.component.css']
})
export class TextFieldComponent implements OnInit {
    @Input() field: Field;
    @Input() control: AbstractControl;
    @Input() valid;

    constructor(private service: FormCreatorService) {
    }

    ngOnInit() {
        this.control.valueChanges.pipe(distinctUntilChanged()).subscribe(res => {
            // this.service.modifyForm(this.field);
        });
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
