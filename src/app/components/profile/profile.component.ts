import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CYRILLIC_PATTERN, EMAIL_PATTERN} from "../../reactive-form-components/constants/validation-patterns-list";
import {ValidationService} from "../../reactive-form-components/services/validation.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    public radioGroupForm: FormGroup;

    feedbackForm: FormGroup = new FormGroup({
        'userName': new FormControl(
            null,
            [Validators.required, Validators.pattern(CYRILLIC_PATTERN)]),
        'userLastName': new FormControl(
            null,
            [Validators.required, Validators.pattern(CYRILLIC_PATTERN)]),
        'userEmail': new FormControl(
            null,
            [Validators.required, Validators.pattern(EMAIL_PATTERN)])
    });

    seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];


    currentRate = 8;

  constructor(
      private formBuilder: FormBuilder,
    private validationService: ValidationService,
      ) {

  }

  ngOnInit() {
      this.radioGroupForm = this.formBuilder.group({
          name: new FormControl('')
      });
  }

    onSubmit(): void {
        if (this.feedbackForm.valid) {
            // Working on your validated form data
        } else {
            this.validationService.markAllFormFieldsAsTouched(this.feedbackForm);
        }
    }

    switchTheme(theme)
    {
        window['switchTheme'](theme);
        localStorage.setItem('themeName', theme);
    }

}
