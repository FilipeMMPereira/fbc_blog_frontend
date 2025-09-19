import { Routes } from '@angular/router';

export const routes: Routes = [
  // Rota administrativa
  {
    path: 'admin',
    children: [
      // Rota de login - fora do layout admin
      { path: 'login', loadComponent: () => import('./pages/admin/login/login').then(m => m.Login) },
      // Layout admin com suas sub-rotas
      {
        path: '',
        loadComponent: () => import('./layouts/admin/admin').then(m => m.AdminLayout),
        children: [
          { path: 'dashboard', loadComponent: () => import('./pages/admin/dashboard/dashboard').then(m => m.Dashboard) },
          { path: 'category/create', loadComponent: () => import('./pages/admin/category-create/category-create').then(m => m.CategoryCreate) },
          { path: 'post/create', loadComponent: () => import('./pages/admin/post-create/post-create').then(m => m.PostCreate) },
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: '**', redirectTo: 'dashboard' }
        ]
      }
    ]
  },
  // Rotas do site principal
// Rotas do site principal
{
  path: '',
  loadComponent: () => import('./layouts/layout/layout').then(m => m.Layout),
  children: [
    { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
    { path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.About) },
    { path: 'details/:slug', loadComponent: () => import('./pages/details/details').then(m => m.Details) },
  ]
},
{ path: '**', redirectTo: '', pathMatch: 'full' }

];
