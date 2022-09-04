import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { RoutesApp } from './constants';

const routes: Routes = [
  {
    path: RoutesApp.root,
    redirectTo: RoutesApp.view_map,
    pathMatch: 'full',
  },
  {
    path: RoutesApp.view_map,
    loadChildren: () => import('./home').then((m) => m.HomeModule),
  },
  {
    path: RoutesApp.map,
    loadChildren: () => import('./home/map').then((m) => m.MapModule),
  },
  {
    path: RoutesApp.auth,
    loadChildren: () => import('./auth').then((m) => m.AuthModule),
  },
  {
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    path: RoutesApp.profile,
    loadChildren: () => import('./home/profile').then((m) => m.ProfileModule),
  },
  { path: '**', redirectTo: RoutesApp.view_map, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
