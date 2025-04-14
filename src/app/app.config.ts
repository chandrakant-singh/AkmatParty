import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environments';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({
      "projectId": "angular-18-with-firebase",
      "appId": "1:123456789abcd",
      "storageBucket": "angular-18-with-firebase.appspot.com",
      "apiKey": "abcdefghijklmnoprst",
      "authDomain": "angular-18-with-firebase.firebaseapp.com",
      "messagingSenderId": "123456789"
    })),
  ]
};
