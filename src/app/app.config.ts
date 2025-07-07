import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './ngrx/store/counter/counter.reducers';
import { messageReducer } from './ngrx/store/message/message.reducers';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
      counterSlice: counterReducer,
      messageSlice: messageReducer
    }), provideClientHydration(withEventReplay())
  ]
};
