import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ThingItem, ThingStoreService} from './thing-store.service';

@Component({
  selector: 'app-thing',
  templateUrl: './thing.component.html',
  styleUrls: ['./thing.component.scss'],

})
export class ThingComponent implements OnInit {

    id: number;
    item: ThingItem;
    constructor(
        private route: ActivatedRoute,
        private thingStoreService: ThingStoreService,
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => this.id = +params['id']);

        this.item = this.thingStoreService.getThingById(this.id)
    }
}
