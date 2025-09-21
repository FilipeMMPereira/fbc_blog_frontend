import { Routes } from '@angular/router';
import { AuthService } from './services/auth.service';



export const routes: Routes = [
  // Rota administrativa
  {
    path: 'admin',
    canActivate: [AuthService],
    canActivateChild: [AuthService],
    children: [
      {
        path: '',
        loadComponent: () => import('./layouts/admin/admin').then(m => m.AdminLayout),
        children: [
          { path: '', loadComponent: () => import('./pages/admin/dashboard/dashboard').then(m => m.Dashboard) },
          { path: 'category/create', loadComponent: () => import('./pages/admin/category-create/category-create').then(m => m.CategoryCreate) },
          { path: 'post/create', loadComponent: () => import('./pages/admin/post-create/post-create').then(m => m.PostCreate) },
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: '**', redirectTo: 'dashboard' }
        ]
      }
    ]
  },
  // Rotas do site principal
  {
    path: '',

    children: [
      { path: 'login', loadComponent: () => import('./pages/auth/login/login').then(m => m.Login) },
      { path: 'create-account', loadComponent: () => import('./pages/auth/create-account/create-account').then(m => m.CreateAccount) },
      // Layout admin com suas sub-rotas
      {
        path: '',
        loadComponent: () => import('./layouts/layout/layout').then(m => m.Layout),
        children: [
          { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
          { path: 'category/:slug', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
          { path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.About) },
          { path: 'details/:slug', loadComponent: () => import('./pages/details/details').then(m => m.Details) },
        ]
      },
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }

];
