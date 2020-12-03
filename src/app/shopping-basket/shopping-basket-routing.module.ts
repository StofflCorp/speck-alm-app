import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingBasketPage } from './shopping-basket.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingBasketPage
  },
  {
    path: 'edit-article',
    loadChildren: () => import('./edit-article/edit-article.module').then( m => m.EditArticlePageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then( m => m.OrderPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingBasketPageRoutingModule {}
