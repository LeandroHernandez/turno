import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewMapComponent } from './view-map.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
// import { AuthModule } from '../auth';
import { RouterModule, Routes } from '@angular/router';
import { RoutesApp } from 'src/app/constants';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { environment } from 'src/environments/environment';

const routes: Routes = [{ path: RoutesApp.root, component: ViewMapComponent }];

@NgModule({
  declarations: [ViewMapComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // AuthModule,
    NzGridModule,
    NzButtonModule,
    NzSpinModule,
    NgxMapboxGLModule.withConfig({ accessToken: environment.mapBox.apiKey }),
  ],
  exports: [ViewMapComponent],
})
export class ViewMapModule {}
