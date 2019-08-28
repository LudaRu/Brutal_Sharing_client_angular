import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {TestRenderComponent} from './components-view/test-render.component';
import {TableComponent} from './components-view/table/table.component';
import {FormComponent} from './components-view/form/form.component';
import {FieldComponent} from './components-view/field/field.component';
import {TextFieldComponent} from './components-view/field/element/text/text.component';
import {FormCreatorService} from './creator/form-creator.service';
import {FormTemp1Component} from './template/form/form-temp1/form-temp1.component';
import {DatetimeFieldComponent} from './components-view/field/element/datetime/datetime.component';
import {Ng2FlatpickrModule} from 'ng2-flatpickr';
import {RadioFieldComponent} from './components-view/field/element/radio/radio.component';


const FORM_COMPONENTS = [
  // TestRenderComponent,
  TableComponent,
  FormComponent,
  FieldComponent,
  TextFieldComponent,
  DatetimeFieldComponent,
  // SelectFieldComponent,
  // RadioFieldComponent,
  // DatetimeFieldComponent,
  // CheckFieldComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2FlatpickrModule,
  ],
  declarations: [
    FORM_COMPONENTS,
    FormTemp1Component,
    RadioFieldComponent,
  ],
  exports: [
    FORM_COMPONENTS,
    FormTemp1Component,
  ],
  providers: [FormCreatorService],
})
export class FormRenderModule {
}
