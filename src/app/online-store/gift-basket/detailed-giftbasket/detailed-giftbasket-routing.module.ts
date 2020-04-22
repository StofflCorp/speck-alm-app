import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailedGiftbasketPage } from './detailed-giftbasket.page';

const routes: Routes = [
  {
    path: '',
    component: DetailedGiftbasketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailedGiftbasketPageRoutingModule {}
