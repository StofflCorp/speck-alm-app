import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductViewPage } from './product-view.page';
import {DataResolverService} from "../../resolver/data-resolver.service";

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
    resolve:{
      special: DataResolverService
    },
    loadChildren: () => import('./articles/articles.module').then( m => m.ArticlesPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductViewPageRoutingModule {}
