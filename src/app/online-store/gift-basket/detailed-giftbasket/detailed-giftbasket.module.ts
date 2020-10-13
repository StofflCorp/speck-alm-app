import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailedGiftbasketPageRoutingModule } from './detailed-giftbasket-routing.module';

import { DetailedGiftbasketPage } from './detailed-giftbasket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailedGiftbasketPageRoutingModule
  ],
  declarations: [DetailedGiftbasketPage]
})
export class DetailedGiftbasketPageModule {}
