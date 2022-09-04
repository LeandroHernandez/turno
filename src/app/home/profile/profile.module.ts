import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { RouterModule, Routes } from '@angular/router';
import { RoutesApp } from 'src/app/constants';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { HeaderModule } from './components/header';
import { ContentModule } from './components/content';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {
  ArrowLeftOutline,
  ArrowRightOutline,
} from '@ant-design/icons-angular/icons';

const routes: Routes = [
  {
    path: RoutesApp.root,
    component: ProfileComponent,
  },
  // {
  //   path: RoutesApp.register,
  //   loadChildren: () =>
  //     import('./components/sign-up').then((m) => m.SignUpModule),
  // },
  { path: '**', redirectTo: RoutesApp.root, pathMatch: 'full' },
];

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    HeaderModule,
    NzIconModule.forChild([ArrowLeftOutline, ArrowRightOutline]),
    ContentModule,
    NzGridModule,
    NzCardModule,
    RouterModule.forChild(routes),
  ],
})
export class ProfileModule {}
