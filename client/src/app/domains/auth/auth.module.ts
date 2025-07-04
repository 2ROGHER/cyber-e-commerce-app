import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';

@NgModule({
  declarations: [LoginPageComponent, SignUpPageComponent],
  imports: [AuthRoutingModule],
  exports: [],
  providers: [],
})
export class AuthModule {}
