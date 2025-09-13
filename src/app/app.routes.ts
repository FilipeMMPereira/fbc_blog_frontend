import { Routes } from '@angular/router';
import { Layout } from './layouts/layout/layout';

export const routes: Routes = [{
  path: '',
  component: Layout,
  children: [
    {path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home)},
    {path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.About)}
  ]
}];
