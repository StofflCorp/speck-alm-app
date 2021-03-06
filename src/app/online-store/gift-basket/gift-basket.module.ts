import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GiftBasketPageRoutingModule } from './gift-basket-routing.module';

import { GiftBasketPage } from './gift-basket.page';
import { DetailedGiftbasketPage } from './detailed-giftbasket/detailed-giftbasket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GiftBasketPageRoutingModule
  ],
  declarations: [GiftBasketPage],
  entryComponents: [DetailedGiftbasketPage]
})
export class GiftBasketPageModule {}
