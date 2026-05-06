import {Routes} from '@angular/router';
import {AppLayout} from './layout/app-layout';

const appName = import.meta.env.NG_APP_NAME;

export const routes: Routes = [
  {
    path: '',
    component: AppLayout,
    children: [
      {path: 'home', redirectTo: 'market', pathMatch: 'full'},
      {
        path: 'market',
        title: `Mercado — ${appName}`,
        loadComponent: () => import('./pages/market/market').then(m => m.Market),
      },
      {
        path: 'budget',
        title: `Presupuesto — ${appName}`,
        loadComponent: () => import('./pages/budget/budget').then(m => m.Budget),
      },
      {
        path: 'settings',
        title: `Ajustes — ${appName}`,
        loadComponent: () => import('./pages/settings/settings').then(m => m.Settings),
      },
      {path: '', redirectTo: 'market', pathMatch: 'full'},
    ],
  },
  {path: '**', redirectTo: 'market'},
];
