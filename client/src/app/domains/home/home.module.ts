import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { NotFoundPageComponent } from './pages/404/404-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './presentation/components/banner/banner.component';
import { CategoryComponent } from './presentation/components/category/category.component';
import { CategoryListComponent } from './presentation/components/categoy-list/category-list.component';
import { CategoryListItemComponent } from './presentation/components/category-list-item/category-list-item.component';
import { CommonModule } from '@angular/common';
import { ProductsBannerComponent } from './presentation/components/products-banner/products-banner.component';
import { ProductsListComponent } from './presentation/components/products-list/products-list.component';
import { ProductCardComponent } from './presentation/components/product-card/product-card.component';
import { TagsBarComponent } from './presentation/widgets/tags-bar/tags-bar.component';
import { OutSaleComponent } from './presentation/widgets/out-sale/out-sale.component';
import { SaleBannerComponent } from './presentation/widgets/sale-banner/sale-banner.component';

/**
 * This module class is responsible for defining the Home domain of the application.
 * It imports the HomeRoutingModule for routing configuration and SharedModule for shared components.
 * It declares the NotFoundPageComponent and HomePageComponent, which are used in the Home domain.
 * @returns {NgModule} - The configured Home module for the application.
 */
@NgModule({
  declarations: [
    NotFoundPageComponent,
    HomePageComponent,
    BannerComponent,
    CategoryComponent,
    CategoryListComponent,
    CategoryListItemComponent,
    ProductsBannerComponent,
    ProductsListComponent,
    ProductCardComponent,
    TagsBarComponent,
    OutSaleComponent,
    SaleBannerComponent,
  ],
  imports: [
    // Import core modules to works with Angular
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ],
  exports: [HomePageComponent, ProductsListComponent],
  providers: [],
})
export class HomeModule {}
