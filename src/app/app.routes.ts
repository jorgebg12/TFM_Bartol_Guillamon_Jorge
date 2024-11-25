import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./Auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'techniques',
    loadChildren: () =>
      import('./Techniques/techniques.module').then((m) => m.TechniquesModule),
  },
];
