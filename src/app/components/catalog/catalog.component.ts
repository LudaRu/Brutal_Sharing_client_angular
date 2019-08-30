import { Component, OnInit } from '@angular/core';
import {CollectionViewer, DataSource} from '@angular/cdk/collections';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
    items = Array.from({length: 10}).map((_, i) => `Item #${i}`);
  constructor() { }

  ngOnInit() {
  }

}
