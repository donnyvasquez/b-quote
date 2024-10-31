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
    path: 'business-quote',
    loadComponent: () => import('./business-quote/business-quote.component').then((m) => m.BusinessQuoteComponent),
  },
  {
    path: 'business-plans',
    loadComponent: () => import('./business-plans/business-plans.component').then((m) => m.BusinessPlansComponent),
  },
  {
    path: 'business-renewal-quote',
    loadComponent: () => import('./business-renewal-quote/business-renewal-quote.component').then((m) => m.BusinessRenewalQuoteComponent),
  },
  {
    path: 'audio-list',
    loadComponent: () => import('./audio-list/audio-list.component').then((m) => m.AudioListComponent),
  },
];
