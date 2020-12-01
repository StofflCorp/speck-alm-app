import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherPage } from './weather.page';

const routes: Routes = [
  {
    path: '',
    component: WeatherPage,
    children: [
      {
        path: '',
        redirectTo: 'weather'
      },
      {
        path: 'webcam',
        loadChildren: () => import('./webcam/webcam.module').then( m => m.WebcamPageModule)
      },
      {
        path: 'weather',
        loadChildren: () => import('./weather/weather.module').then( m => m.WeatherPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherPageRoutingModule {}
