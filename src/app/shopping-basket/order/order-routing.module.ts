import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderPage } from './order.page';
import { HomePage} from '../../home/home.page';

const routes: Routes = [
  {
    path: '',
    component: OrderPage
  },
  {
    path: 'home',
    component: HomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderPageRoutingModule {}
