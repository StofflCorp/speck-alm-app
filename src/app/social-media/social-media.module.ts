import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocialMediaPageRoutingModule } from './social-media-routing.module';

import { SocialMediaPage } from './social-media.page';
import {HomePageModule} from "../home/home.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SocialMediaPageRoutingModule,
        HomePageModule
    ],
  declarations: [SocialMediaPage]
})
export class SocialMediaPageModule {}
