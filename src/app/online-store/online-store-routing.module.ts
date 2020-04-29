import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnlineStorePage } from './online-store.page';
import {DataResolverService} from "../resolver/data-resolver.service";

const routes: Routes = [
  {
    path: '',
    component: OnlineStorePage,
    children: [
      {
        path: '',
        redirectTo: 'product-view'
      },
      {
        path: 'product-view',
        loadChildren: () => import('./product-view/product-view.module').then( m => m.ProductViewPageModule)
      },
      {
        path: 'product-view/:id',
        resolve:{
          special: DataResolverService
        },
        loadChildren: () => import('./product-view/product-view.module').then( m => m.ProductViewPageModule)
      },
      {
        path: 'gift-basket',
        loadChildren: () => import('./gift-basket/gift-basket.module').then( m => m.GiftBasketPageModule)
      }

    ]
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnlineStorePageRoutingModule {}
