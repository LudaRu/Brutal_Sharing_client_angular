import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    public radioGroupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
      this.radioGroupForm = this.formBuilder.group({
          'model': 1
      });
  }

}
