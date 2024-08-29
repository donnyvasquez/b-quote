import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'international-business-quote',
    loadComponent: () => import('./international-business-quote/international-business-quote.component').then((m) => m.InternationalBusinessQuoteComponent),
  },
  {
    path: 'international-business-plans',
    loadComponent: () => import('./international-business-plans/international-business-plans.component').then((m) => m.InternationalBusinessPlansComponent),
  },
];
