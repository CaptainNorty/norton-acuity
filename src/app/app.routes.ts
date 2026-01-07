import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'work',
    loadComponent: () => import('./work-page/work.page').then((m) => m.WorkPage),
  },
  {
    path: 'blog',
    loadComponent: () => import('./blog/blog.page').then((m) => m.BlogPage),
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.page').then((m) => m.ContactPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
