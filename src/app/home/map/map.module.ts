import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { RouterModule, Routes } from '@angular/router';
import { RoutesApp } from 'src/app/constants';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { environment } from 'src/environments/environment';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { HttpClientModule } from '@angular/common/http';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {
  AimOutline,
  EnvironmentOutline,
} from '@ant-design/icons-angular/icons';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NavModule } from './components/nav';

const routes: Routes = [{ path: RoutesApp.root, component: MapComponent }];

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxMapboxGLModule.withConfig({ accessToken: environment.mapBox.apiKey }),
    NavModule,
    NzIconModule.forChild([AimOutline, EnvironmentOutline]),
    HttpClientModule,
    NzSpinModule,
    NzButtonModule,
    NzBadgeModule,
    NzGridModule,
    NzTypographyModule,
  ],
  exports: [MapComponent],
})
export class MapModule {}
