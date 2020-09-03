import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingBasketPage } from './shopping-basket.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingBasketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingBasketPageRoutingModule {}
