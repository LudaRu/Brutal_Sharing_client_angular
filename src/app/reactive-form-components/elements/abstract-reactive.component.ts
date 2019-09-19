import {Injectable, OnInit, DoCheck, Input, Output, EventEmitter} from '@angular/core';
import { AbstractControl }                    from '@angular/forms';
import { LABEL_LIST }                         from '../constants/reactive-form-labels-list';

@Injectable()
export abstract class AbstractReactiveComponent implements OnInit, DoCheck {
    // @Output() onFocus = new EventEmitter<string>();
    // @Output() onBlur = new EventEmitter<string>();

  @Input() fieldId: string | null = null;
  @Input() control: AbstractControl | null = null;
  @Input() textMode: boolean = false;
  @Input() label: string = null;

  validationErrors: object = null;

  ngOnInit() {
    if (!this.label)
        this.label = LABEL_LIST[this.fieldId] ? LABEL_LIST[this.fieldId] : '';
  }

  ngDoCheck() {
    this.validationErrors = this.control.touched && this.control.invalid ? this.control['errors'] : null;
  }

    // onFocus(): void {
    //     this.onFocus.emit(this.userName);
    //     this.service.changeFocus({'field': this.field, 'event': 'focus'});
    // }

    // onBlur(): void {
    //     this.onBlur.emit(this.userName);
        // this.service.changeFocus({'field': this.field, 'event': 'blur'});
    // }
}
