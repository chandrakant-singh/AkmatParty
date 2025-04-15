import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';

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
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: '**',
    redirectTo: ''
  },

];
