import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ShareModule } from 'projects/share/src/public-api';

@NgModule({
  declarations: [AuthComponent, LoginComponent],
  imports: [AuthRoutingModule, ShareModule],
  exports: [AuthComponent],
})
export class AuthModule {}
