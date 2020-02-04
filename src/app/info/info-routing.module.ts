import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoPage } from './info.page';

const routes: Routes = [
  {
    path: '',
    component: InfoPage,
    children: [
      {
        path: '',
        redirectTo: 'farm'
      },
      {
        path: 'farm',
        loadChildren: () => import('./farm/farm.module').then(m => m.FarmPageModule)
      },
      {
        path: 'inn',
        loadChildren: () => import('./inn/inn.module').then(m => m.InnPageModule)
      },
      {
        path: 'yardStore',
        loadChildren: () => import('./yard-store/yard-store.module').then(m => m.YardStorePageModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoPageRoutingModule {}
