import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GiftBasketPageRoutingModule } from './gift-basket-routing.module';

import { GiftBasketPage } from './gift-basket.page';
import { DetailedGiftbasketPage } from './detailed-giftbasket/detailed-giftbasket.page';
import {DetailedArticlePage} from '../product-view/detailed-article/detailed-article.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GiftBasketPageRoutingModule
  ],
  declarations: [GiftBasketPage, DetailedGiftbasketPage],
  entryComponents: [DetailedGiftbasketPage]
})
export class GiftBasketPageModule {}
