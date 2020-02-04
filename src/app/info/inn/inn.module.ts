import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InnPageRoutingModule } from './inn-routing.module';

import { InnPage } from './inn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InnPageRoutingModule
  ],
  declarations: [InnPage]
})
export class InnPageModule {}
