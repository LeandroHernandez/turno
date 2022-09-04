import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { UserOutline, LockOutline } from '@ant-design/icons-angular/icons';

@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    NzGridModule,
    NzCardModule,
    NzIconModule.forChild([UserOutline, LockOutline]),
  ],
  exports: [ContentComponent],
})
export class ContentModule {}
