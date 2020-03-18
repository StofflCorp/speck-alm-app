import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailedArticlePageRoutingModule } from './detailed-article-routing.module';

import { DetailedArticlePage } from './detailed-article.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailedArticlePageRoutingModule
  ],
  declarations: [DetailedArticlePage]
})
export class DetailedArticlePageModule {}
