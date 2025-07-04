import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
const authRouter: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    component: SignUpPageComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(authRouter)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
