import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesApp } from '../constants';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: RoutesApp.root,
    component: HomeComponent,
  },
  { path: '**', redirectTo: RoutesApp.root, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
