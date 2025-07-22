import { NgModule } from '@angular/core';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { FilterBarComponent } from './presentation/components/filter-bar/filter-bar.component';
import { HomeModule } from '../home/home.module';
import { FilterSelectionComponent } from './presentation/widgets/filter-selection/filter-selection.component';

@NgModule({
  declarations: [ProductsPageComponent, FilterBarComponent, FilterSelectionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule, // Shared module
    // Important: import the ProductsRoutingModule to works all here
    ProductsRoutingModule,

    // TODO("Delete this module to import product list by home. This components belongs to this module [products]")
    HomeModule,
  ],
  providers: [],
  exports: [ProductsPageComponent],
})
export class ProductsModule {}
