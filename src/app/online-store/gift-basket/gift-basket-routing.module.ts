import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiftBasketPage } from './gift-basket.page';

const routes: Routes = [
  {
    path: '',
    component: GiftBasketPage
  },
  {
    path: 'detailed-giftbasket',
    loadChildren: () => import('./detailed-giftbasket/detailed-giftbasket.module').then( m => m.DetailedGiftbasketPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiftBasketPageRoutingModule {}
