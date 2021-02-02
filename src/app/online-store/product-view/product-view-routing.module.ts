import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductViewPage } from './product-view.page';
import {DataResolverService} from '../../resolver/data-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ProductViewPage
  },
  {
    path: 'articles',
    loadChildren: () => import('./articles/articles.module').then( m => m.ArticlesPageModule)
  },
  {
    path: 'articles/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: () => import('./articles/articles.module').then( m => m.ArticlesPageModule)
  },
  {
    path: 'shopping-basket',
    loadChildren: () => import('../../shopping-basket/shopping-basket.module').then( m => m.ShoppingBasketPageModule)
  },
  {
    path: 'meat-parts',
    loadChildren: () => import('./meat-parts/meat-parts.module').then( m => m.MeatPartsPageModule)
  },
  {
    path: 'meat-parts/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: () => import('./meat-parts/meat-parts.module').then( m => m.MeatPartsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductViewPageRoutingModule {}
