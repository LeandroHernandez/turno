import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { MapModule } from './map';
// import { AuthModule } from './auth';
import { ViewMapModule } from './view-map';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    NgxMapboxGLModule.withConfig({ accessToken: environment.mapBox.apiKey }),
    CommonModule,
    HomeRoutingModule,
    MapModule,
    ViewMapModule,
    // AuthModule,
    NzGridModule,
    NzButtonModule,
  ],
})
export class HomeModule {}
