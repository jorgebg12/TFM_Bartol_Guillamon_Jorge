import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./Auth/auth.module').then((m) => m.AuthModule),
  },
];
