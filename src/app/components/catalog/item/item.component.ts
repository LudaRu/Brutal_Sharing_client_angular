import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

    public like = false;

    constructor() {
    }

    ngOnInit() {
    }

    toggleLike() {
        this.like = !this.like;
    }

}
