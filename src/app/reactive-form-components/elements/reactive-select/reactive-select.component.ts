import { Component, OnInit } from '@angular/core';
import {AbstractReactiveComponent} from "../abstract-reactive.component";

export const ITEMS: Item[] = [
    {
        name:'Item 1',
        value:'item_1'
    },
    {
        name:'Item 2',
        value:'item_2'
    },
    {
        name:'Item 3',
        value:'item_3'
    },
    {
        name:'Item 4',
        value:'item_4'
    },
    {
        name:'Item 5',
        value:'item_5'
    }
];
export class Item{
    name:string;
    value:string;
}

@Component({
  selector: 'app-reactive-select',
  templateUrl: './reactive-select.component.html',
  styleUrls: ['./reactive-select.component.scss']
})
export class ReactiveSelectComponent  {
    radioSel:any;
    radioSelected:string;
    radioSelectedString:string;
    itemsList: Item[] = ITEMS;

    constructor() {
        this.itemsList = ITEMS;
        this.radioSelected = "item_3";
        this.getSelecteditem();
    }

    getSelecteditem(){
        this.radioSel = ITEMS.find(Item => Item.value === this.radioSelected);
        this.radioSelectedString = JSON.stringify(this.radioSel);
    }

    onItemChange(item){
        console.log('onItemChange', item)
        this.getSelecteditem();
    }

}
