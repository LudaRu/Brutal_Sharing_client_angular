import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThingStoreService {

    items$ = new BehaviorSubject([]); // типы События

  constructor() { }

    getThingById(id): ThingItem {
      return {
          img: 'https://77.img.avito.st/640x480/5943039277.jpg',
          name: 'Шуба красная без ок',
          tags: ['lol', 'fol', 'sergi', 'lol', 'fol', 'sergi'],
          discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      };
    }


}

export interface ThingItem {
    img: any;
    name: any;
    tags: any;
    discription: any;
}
