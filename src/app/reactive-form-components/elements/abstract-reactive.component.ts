import { Injectable, OnInit, DoCheck, Input } from '@angular/core';
import { AbstractControl }                    from '@angular/forms';
import { LABEL_LIST }                         from '../constants/reactive-form-labels-list';

@Injectable()
export abstract class AbstractReactiveComponent implements OnInit, DoCheck {

  @Input() fieldId: string | null = null;

  @Input() control: AbstractControl | null = null;

  label: string = null;
  validationErrors: object = null;

  ngOnInit() {
    this.label = LABEL_LIST[this.fieldId] ? LABEL_LIST[this.fieldId] : '';
  }

  ngDoCheck() {
    this.validationErrors = this.control.touched && this.control.invalid ? this.control['errors'] : null;
  }
}
