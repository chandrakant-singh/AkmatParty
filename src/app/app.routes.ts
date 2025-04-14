import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'our-promises',
    loadChildren: () => import('./components/our-promises/our-promises.module').then(m => m.OurPromisesModule)
  },
  {
    path: 'donate',
    loadChildren: () => import('./components/donate/donate.module').then(m => m.DonateModule)
  }
];
