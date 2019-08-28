import {ElementRef, Inject, Injectable, Renderer2} from '@angular/core';
import {WINDOW} from "./window.service";
import {DOCUMENT} from "@angular/common";

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
        constructor(
        @Inject(DOCUMENT) private document: Document,
        @Inject(WINDOW) private window: Window,
    ) {
            console.log('ThemeService constructor')
        }

    setTheme(theme: string) {
        window['switchStyle'](theme);
        localStorage.setItem('myapp-theme', theme); // same key as in 'load-style.js'
    }

    findStyle(theme) {
        // const body = document.getElementsByTagName('body');
        // this.renderer.addClass(this.header.nativeElement, 'mini');
        // for (var i = 0; i < links.length; i++) {
        //     if ((links[i].rel.indexOf('stylesheet') != -1) && links[i].title === theme) {
        //         return true
        //     }
        // }
        // return false;
    }

    switchStyle(theme) {
        // if (theme && this.findStyle(theme)) {
        //     var links = document.getElementsByTagName('link');
        //     for (var i = 0; i < links.length; i++) {
        //         var link = links[i];
        //         if (link.rel.indexOf('stylesheet') != -1 && link.title) {
        //             if (link.title === theme) {
        //                 link.disabled = false;
        //             } else {
        //                 link.disabled = true;
        //             }
        //         }
        //     }
        // }
    }

}
