import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesApp } from '../constants';

const routes: Routes = [
  {
    path: RoutesApp.root,
    redirectTo: RoutesApp.logIn,
    pathMatch: 'full',
  },
  {
    path: RoutesApp.logIn,
    loadChildren: () => import('./log-in').then((m) => m.LogInModule),
  },
  {
    path: RoutesApp.register,
    loadChildren: () => import('./sign-up').then((m) => m.SignUpModule),
  },
  { path: '**', redirectTo: RoutesApp.logIn, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
