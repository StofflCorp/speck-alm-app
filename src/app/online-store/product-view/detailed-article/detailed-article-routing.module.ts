import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailedArticlePage } from './detailed-article.page';


const routes: Routes = [
  {
    path: '',
    component: DetailedArticlePage
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailedArticlePageRoutingModule {}
