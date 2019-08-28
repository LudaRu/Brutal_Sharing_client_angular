import { isPlatformBrowser } from '@angular/common';
import { ClassProvider, FactoryProvider, InjectionToken, PLATFORM_ID } from '@angular/core';

export const WINDOW = new InjectionToken('WindowToken');

export abstract class WindowRef {

  get nativeWindow(): Window {
    throw new Error('Not implemented.');
  }

}

export class BrowserWindowRef extends WindowRef {

  constructor() {
    super();
  }

  get nativeWindow(): Window {
    return window;
  }

}

export function windowFactory(browserWindowRef: BrowserWindowRef, platformId): Window {
  if (isPlatformBrowser(platformId)) {
    return browserWindowRef.nativeWindow;
  }

  return new Object() as Window;
}

export const browserWindowProvider: ClassProvider = {
  provide: WindowRef,
  useClass: BrowserWindowRef
};

export const windowProvider: FactoryProvider = {
  provide: WINDOW,
  useFactory: windowFactory,
  deps: [ WindowRef, PLATFORM_ID ]
};


export const WINDOW_PROVIDERS = [
  browserWindowProvider,
  windowProvider
];
