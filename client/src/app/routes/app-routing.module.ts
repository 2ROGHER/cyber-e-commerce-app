import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../404.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('../domains/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('../domains/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

/**
 * This class module is responsible for defining the routes of the application.
 * It uses the Angular Router to set up lazy loading for different modules.
 * The routes include a default redirect to 'home', a lazy-loaded 'home' module,
 * @returns {NgModule} - The configured routing module for the application.
 */
@NgModule({
  imports: [
    // 1. Use PreloadingStrategy that helps us load all modules in the background proccess
    RouterModule.forRoot(routes, {
      useHash: true, // use hash strategy for routing to this application
      preloadingStrategy: PreloadAllModules, // This strategy is used to preload all modules at the background escenes
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
