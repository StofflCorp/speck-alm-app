import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MeatPartsPageRoutingModule } from './meat-parts-routing.module';

import { MeatPartsPage } from './meat-parts.page';
import {SafePipe} from './safe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeatPartsPageRoutingModule,
  ],
  declarations: [MeatPartsPage, SafePipe]
})
export class MeatPartsPageModule {}
