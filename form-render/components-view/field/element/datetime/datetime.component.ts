import {Component, OnInit, Input} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {Field, FieldOption} from '../../../../creator/form.model';
import Russian from 'flatpickr/dist/l10n/ru.js';
import {FlatpickrOptions} from 'ng2-flatpickr';

@Component({
  selector: 'datetime-f',
  template: `
    <div class="form-group">
      <div class="input-group">
        <ng2-flatpickr
          [config]="exampleOptions"
        ></ng2-flatpickr>
        <div class="input-group-append">
          <span class="input-group-text" (click)="onClick()"><i class="fa fa-calendar"></i></span>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./datetime.component.css']
})
export class DatetimeFieldComponent implements OnInit {
  @Input() field: Field;
  @Input() control: AbstractControl;
  @Input() valid;

  exampleOptions: FlatpickrOptions = {
    parent: this,
    // defaultDate: this.defaultDate,
    // dateFormat: 'd.m.Y H:i:S',
    // enableTime: true,
    // time_24hr: true,
    dateFormat: 'd.m.Y',
    locale: Russian.ru,
    clickOpens: true,
    onChange: function(selectedDates, dateStr, instance) {
      this.config.parent.date = dateStr;
    },
  };

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
