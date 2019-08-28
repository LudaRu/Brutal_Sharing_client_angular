import {Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewContainerRef} from '@angular/core';
import {FormCreatorService} from '../../creator/form-creator.service';
import {FormGroup} from '@angular/forms';
import {markFormGroupTouched} from '../../../service/Object';
import {Field, FormConfig} from '../../creator/form.model';

@Component({
  selector: 'app-render-form',
  templateUrl: 'form.component.html',
  styleUrls: ['./form.css'],
})
export class FormComponent implements OnInit {
  @Input() formConfig;
  @Input() formData;
  @Input() customTemplate: TemplateRef<any>;
  @Input() template: string;

  @Output() focusChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output() registerForm: EventEmitter<any> = new EventEmitter<any>();
  @Output() form: FormGroup;

  constructor(
    private formCreatorService: FormCreatorService,
  ) {
    this.formConfig = this.testConf;
    this.formData = this.testData;
  }

  testConf: FormConfig = {
    modeRead: true,
    fields: [
      <Field> {
        fieldName: 'purchaseInfo',
        title: 'Общие сведения об электронном аукционе',
        fields: [
          {
            fieldName: 'registrationNumber',
            title: 'Номер извещения',
            type: 'text',
            value: '0573112534717100024',
          },
          {
            fieldName: 'idCode',
            title: 'Идентификационный код закупки',
            type: 'text',
            value: '171771750975777170100100900010000242',
          },
          {
            fieldName: 'name',
            title: 'Наименование закупки',
            type: 'text',
            value: 'Закупка 24 от 04.09',
          },
          {
            fieldName: 'maxSum',
            title: 'Начальная (максимальная) цена контракта',
            type: 'text',
          },
        ]
      },
    ]
  };

  testData = {
    maxSum: 'Эта строчка из testData',
  };

  ngOnInit() {
    if (!this.formConfig) { // Демонстрационные конфигурации
      this.formConfig = this.testConf;
      this.formData = this.testData;
    }
    this.form = this.formCreatorService.generateForm(this.formConfig, this.formData);
  }

  onClick(type: string = null) {
    markFormGroupTouched(this.form);
    // if (type === 'submit') {
    //     this.submit.emit(this.form);
    // } else if (type === 'button') {
    //     this.next.emit(this.form);
    // }
  }

}
