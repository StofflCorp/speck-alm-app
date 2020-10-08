import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailedArticlePage } from './detailed-article.page';


const routes: Routes = [
  {
    path: '',
    component: DetailedArticlePage
  },
  {
    path: 'store',
    loadChildren: () => import('../../online-store.module').then( m => m.OnlineStorePageModule)
  },
  {
    path: 'shopping-basket',
    loadChildren: () => import('../../../shopping-basket/shopping-basket.module').then( m => m.ShoppingBasketPageModule)
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailedArticlePageRoutingModule {}
