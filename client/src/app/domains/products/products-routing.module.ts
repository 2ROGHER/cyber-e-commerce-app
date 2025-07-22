import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from '../../shared/components/pages/404/404-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';

const productsRouter: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductsPageComponent,
  },
  {
    path: '404',
    component: NotFoundPageComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forChild(productsRouter)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
