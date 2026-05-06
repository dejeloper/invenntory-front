import {Routes} from '@angular/router';
import {AppLayout} from './layout/app-layout';

export const routes: Routes = [
  {
    path: '',
    component: AppLayout,
    children: [
      {path: 'home', redirectTo: 'market', pathMatch: 'full'},
      {
        path: 'market',
        loadComponent: () => import('./pages/market/market').then(m => m.Market),
      },
      {
        path: 'budget',
        loadComponent: () => import('./pages/budget/budget').then(m => m.Budget),
      },
      {
        path: 'settings',
        loadComponent: () => import('./pages/settings/settings').then(m => m.Settings),
      },
      {path: '', redirectTo: 'market', pathMatch: 'full'},
    ],
  },
  {path: '**', redirectTo: 'market'},
];
