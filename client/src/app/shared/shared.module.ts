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
import { BreadCrumbComponent } from './components/components/bread-crumb/bread-crumb.component';
import { DropDownMenuComponent } from './components/components/drop-down-menu/drop-down-menu.component';
import { MenuListItemComponent } from './components/components/menu-list-item/menu-list-item.component';
import { PaginationComponent } from './components/components/pagination/pagination.component';

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
    BreadCrumbComponent,
    DropDownMenuComponent,
    MenuListItemComponent,
    PaginationComponent,
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
    FooterComponent,
    BreadCrumbComponent,
    DropDownMenuComponent,
    PaginationComponent,
  ],
  providers: [],
})
export class SharedModule {}
