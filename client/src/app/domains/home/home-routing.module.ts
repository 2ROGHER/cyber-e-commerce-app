import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/404/404-page.component';

const homeRouter: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
  },
  // {
  //   path: '/:id',
  //   template: `<h1>Not Found page</h1>`,
  // }
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];
/**
 * This routing module is responsible for defining the routes for the Home domain of the application.
 * It sets up the main HomePageComponent for the root path and a NotFoundPageComponent
 */
@NgModule({
  imports: [RouterModule.forChild(homeRouter)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
