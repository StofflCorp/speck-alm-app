import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingBasketPageRoutingModule } from './shopping-basket-routing.module';

import { ShoppingBasketPage } from './shopping-basket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingBasketPageRoutingModule
  ],
  declarations: [ShoppingBasketPage]
})
export class ShoppingBasketPageModule {}
