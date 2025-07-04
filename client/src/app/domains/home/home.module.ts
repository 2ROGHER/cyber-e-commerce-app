import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { NotFoundPageComponent } from './pages/404/404-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '../../shared/shared.module';

/**
 * This module class is responsible for defining the Home domain of the application.
 * It imports the HomeRoutingModule for routing configuration and SharedModule for shared components.
 * It declares the NotFoundPageComponent and HomePageComponent, which are used in the Home domain.
 * @returns {NgModule} - The configured Home module for the application.
 */
@NgModule({
  declarations: [NotFoundPageComponent, HomePageComponent],
  imports: [HomeRoutingModule, SharedModule],
  exports: [HomePageComponent],
  providers: [],
})
export class HomeModule {}
