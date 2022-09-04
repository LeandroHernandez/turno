import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { RoutesApp } from 'src/app/constants';
import { ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {
  UserOutline,
  LockOutline,
  FileOutline,
  SelectOutline,
  NumberOutline,
  InfoOutline,
  MailOutline,
} from '@ant-design/icons-angular/icons';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';

const routes: Routes = [{ path: RoutesApp.root, component: SignUpComponent }];

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NzIconModule.forChild([
      UserOutline,
      LockOutline,
      SelectOutline,
      NumberOutline,
      MailOutline,
    ]),
    NzSelectModule,
    NzFormModule,
    NzInputModule,
    NzGridModule,
    NzCardModule,
    NzButtonModule,
  ],
})
export class SignUpModule {}
