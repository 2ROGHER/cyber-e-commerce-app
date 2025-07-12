import { NgModule } from '@angular/core';
import { NotFoundPageComponent } from './components/pages/404/404-page.component';
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';
import { LogoComponent } from './components/ui/logo/logo.component';
import { NavBarComponent } from './components/components/nav-bar/nav-bar.component';
import { SearchBarComponent } from './components/widgets/search-bar/search-bar.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/ui/button/button.component';
import { BannerCardComponent } from './components/widgets/banner-card/banner-card.component';
import { FooterComponent } from './components/widgets/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NotFoundPageComponent,
    ErrorPageComponent,
    LogoComponent,
    NavBarComponent,
    SearchBarComponent,
    ButtonComponent,
    BannerCardComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NotFoundPageComponent,
    ErrorPageComponent,
    LogoComponent,
    NavBarComponent,
    ButtonComponent,
    BannerCardComponent,
    FooterComponent
  ],
  providers: [],
})
export class SharedModule {}
