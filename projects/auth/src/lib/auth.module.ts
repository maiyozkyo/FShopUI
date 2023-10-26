import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ShareModule } from 'projects/share/src/public-api';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
@NgModule({
  declarations: [AuthComponent, LoginComponent],
  imports: [
    AuthRoutingModule,
    ShareModule,
    CommonModule,
    ReactiveFormsModule,
    TabViewModule,
  ],
  exports: [AuthComponent],
})
export class AuthModule {}
