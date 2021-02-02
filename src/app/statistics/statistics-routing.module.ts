import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatisticsPage } from './statistics.page';

const routes: Routes = [
  {
    path: '',
    component: StatisticsPage
  },
  {
    path: 'shopping-basket',
    loadChildren: () => import('../shopping-basket/shopping-basket.module').then( m => m.ShoppingBasketPageModule)
  },
  {
    path: 'show-order',
    loadChildren: () => import('./show-order/show-order.module').then( m => m.ShowOrderPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatisticsPageRoutingModule {}
