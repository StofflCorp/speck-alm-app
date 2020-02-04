import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YardStorePageRoutingModule } from './yard-store-routing.module';

import { YardStorePage } from './yard-store.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YardStorePageRoutingModule
  ],
  declarations: [YardStorePage]
})
export class YardStorePageModule {}
