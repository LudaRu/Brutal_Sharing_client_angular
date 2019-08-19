import { Component, OnInit } from '@angular/core';
import { Renderer2, Inject } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BrutalSharing';

    setTheme(theme: string) {
        window['switchStyle'](theme);
        localStorage.setItem('myapp-theme', theme); // same key as in 'load-style.js'
    }
}
