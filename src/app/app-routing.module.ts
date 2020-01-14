import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'modal',
    loadChildren: () => import('./LandingPage/NewsPage/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'event-modal',
    loadChildren: () => import('./LandingPage/EventPage/event-modal/event-modal.module').then( m => m.EventModalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
