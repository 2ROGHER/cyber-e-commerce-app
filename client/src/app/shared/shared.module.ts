import { NgModule } from '@angular/core';
import { NotFoundPageComponent } from './components/pages/404/404-page.component';
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';
import { LogoComponent } from './components/ui/logo/logo.component';

@NgModule({
  declarations: [NotFoundPageComponent, ErrorPageComponent, LogoComponent],
  imports: [],
  exports: [NotFoundPageComponent, ErrorPageComponent, LogoComponent],
  providers: [],
})
export class SharedModule {}
