import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesPage } from './articles.page';

const routes: Routes = [

  {
    path: '',
    component: ArticlesPage,
    children: [
      {
        path: '/:id',
        loadChildren: () => import('../detailed-article/detailed-article.module').then( m => m.DetailedArticlePageModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesPageRoutingModule {}
