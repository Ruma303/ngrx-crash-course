import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { routes } from './app.routes';

import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { messageReducer } from './ngrx/store/message/message.reducers';
import { MessageEffects } from './ngrx/store/message/message.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ messageSlice: messageReducer }),
    provideEffects([MessageEffects]),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ]
};
