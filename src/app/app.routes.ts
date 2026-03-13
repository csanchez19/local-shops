import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pay',
    pathMatch: 'full',
  },
  {
    path: 'pay',
    loadComponent: () => import('./presentation/pages/pay/pay.component').then(m => m.PayComponent),
  },
  {
    path: 'history',
    loadComponent: () => import('./presentation/pages/history/history.component').then(m => m.HistoryComponent),
  },
];
