import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ClickOutsideDirective } from './shared/directives/click-outside.directive';

export const appConfig: ApplicationConfig = {
  providers: [

    provideRouter(routes, withViewTransitions()),
    provideAnimations(),
    importProvidersFrom(

      BrowserModule,
      BrowserAnimationsModule,
      
    ),
    ClickOutsideDirective,
  ],
  
};
