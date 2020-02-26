import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiftBasketPage } from './gift-basket.page';

const routes: Routes = [
  {
    path: '',
    component: GiftBasketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiftBasketPageRoutingModule {}
