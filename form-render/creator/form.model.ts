export class FormConfig {
  modeRead: boolean;
  fields: Field[];

  constructor(form?: any) {
    this.modeRead = form && form.modeRead || false;
    this.fields = form && form.fields && form.fields.map(f => new Field(f)) || null;
  }
}

export class Field {
  fieldName: string;
  fields: Field[];
  type: string;
  title: string;
  value: any;
  validators: Validator[];
  setting: FieldSetting;
  options: FieldOption;

  constructor(field?: any) {
    this.fieldName = field && field.fieldName || null;
    this.type = field && field.type || null;
    this.fields = field && field.fields || null;
    this.title = field && field.title || this.fieldName;
    this.setting = field && field.setting || null;
    this.validators = field && field.validators || null;
  }
}

export class Validator {
  name: any;
  value: any;
  errorMessage: string;

  constructor(option?: any) {
    this.name = option && option.name || null;
    this.value = option && option.value || null;
    this.errorMessage = option && option.errorMessage || null;
  }
}

export class FieldSetting {
  options: FieldOption[];
  maxDateTime: any;
  minDatetime: any;
  format: any;
}

export class FieldOption {
  key: any;
  value: any;

  constructor(option?: any) {
    this.key = option && option.key || null;
    this.value = option && option.value || this.key;
  }
}


