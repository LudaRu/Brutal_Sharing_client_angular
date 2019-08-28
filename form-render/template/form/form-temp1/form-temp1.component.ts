import {Component, OnInit} from '@angular/core';
import {FormComponent} from '../../../components-view/form/form.component';

@Component({
  selector: 'app-render-form-reestr',
  styleUrls: ['./form-temp1.component.css'],
  template: `
    <ng-template [ngTemplateOutlet]="customTemplate || defaultTemplate"
                 [ngTemplateOutletContext]="{fieldCfg: formConfig, form: form}"
    ></ng-template>

    <ng-template #defaultTemplate let-fieldCfg="fieldCfg" let-form="form">
      <form role="form">
        <ng-container [ngTemplateOutlet]="recursiveTemplate" [ngTemplateOutletContext]="{fieldCfg: fieldCfg, form: form}">
        </ng-container>
      </form>
    </ng-template>

    <ng-template #recursiveTemplate let-fieldCfg="fieldCfg" let-form="form">
      <div *ngFor="let field of fieldCfg.fields">
        <div *ngIf="field.fields" class="mt-4 mb-2" style="font-size: 22px;">{{field.title}}</div>
        <div *ngIf="!field.fields" class="row">
          <label class=" afterLine col-5 _control-label">{{field.title}}</label>
          <div class="col-7 ">
            <form-field [modeRead]="formConfig.modeRead" [field]="field" [control]="form.controls[field.fieldName]"
                        (buttonClicked)="onClick($event)"></form-field>
          </div>
        </div>

        <ng-container *ngIf="field.fields" [ngTemplateOutlet]="recursiveTemplate"
                      [ngTemplateOutletContext]="{fieldCfg: field, form: form.controls[field.fieldName]}"></ng-container>

      </div>
    </ng-template>
  `,

})
export class FormTemp1Component extends FormComponent implements OnInit {

}
