import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule) },
  { path: 'socialMedia', loadChildren: () => import('./social-media/social-media.module').then( m => m.SocialMediaPageModule) },
  { path: 'info',  loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule) },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  }, {
    path: 'online-store',
    loadChildren: () => import('./online-store/online-store.module').then(m => m.OnlineStorePageModule)
  },
  {
    path: 'reservation',
    loadChildren: () => import('./reservation/reservation.module').then( m => m.ReservationPageModule)
  },
  {
    path: 'shopping-basket',
    loadChildren: () => import('./shopping-basket/shopping-basket.module').then( m => m.ShoppingBasketPageModule)
  },
  {
    path: 'weather',
    loadChildren: () => import('./weather/weather.module').then( m => m.WeatherPageModule)
  },
  {
    path: 'jokes',
    loadChildren: () => import('./jokes/jokes.module').then( m => m.JokesPageModule)
  },
  {
    path: 'statistics',
    loadChildren: () => import('./statistics/statistics.module').then( m => m.StatisticsPageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
