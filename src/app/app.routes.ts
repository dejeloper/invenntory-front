import { Routes } from '@angular/router';
import { AppLayout } from './layout/app-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AppLayout,
    children: [
      { path: 'home', redirectTo: 'market', pathMatch: 'full' },
      {
        path: 'market',
        loadComponent: () => import('./pages/market/market.component').then(m => m.MarketComponent),
      },
      {
        path: 'budget',
        loadComponent: () => import('./pages/budget/budget.component').then(m => m.BudgetComponent),
      },
      {
        path: 'settings',
        loadComponent: () => import('./pages/settings/settings.component').then(m => m.SettingsComponent),
      },
      { path: '', redirectTo: 'market', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'market' },
];
