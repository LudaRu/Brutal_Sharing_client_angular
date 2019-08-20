import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import { Renderer2, Inject } from '@angular/core';

import {WINDOW} from './services/window.service';
import {DOCUMENT} from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@HostListener('window:scroll', [])
export class AppComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) { }
  @ViewChild('bottom-nav', {static: false}) elementView: ElementRef;

  title = 'BrutalSharing';
  contentHeight: number;

  public navIsFixed: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    if (number > 100) {
      this.navIsFixed = true;
    } else if (this.navIsFixed && number < 10) {
      this.navIsFixed = false;
    }
  }

  ngAfterViewInit() {
    const bottomnav = document.querySelector('.bottom-nav')  as HTMLDivElement;
    console.log(bottomnav.offsetHeight);
    // this.contentHeight = this.elementView.nativeElement.offsetHeight;
  }

    setTheme(theme: string) {
        window['switchStyle'](theme);
        localStorage.setItem('myapp-theme', theme); // same key as in 'load-style.js'
    }
}
