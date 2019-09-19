import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ThingItem, ThingStoreService} from './thing-store.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CYRILLIC_PATTERN, EMAIL_PATTERN} from '../../reactive-form-components/constants/validation-patterns-list';

@Component({
  selector: 'app-thing',
  templateUrl: './thing.component.html',
  styleUrls: ['./thing.component.scss'],

})
export class ThingComponent implements OnInit {

    id: number;
    item: ThingItem;

    form: FormGroup = new FormGroup({
        'userName': new FormControl(null)
    });

    constructor(
        private route: ActivatedRoute,
        private thingStoreService: ThingStoreService,
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => this.id = +params['id']);

        this.item = this.thingStoreService.getThingById(this.id)
    }
}
