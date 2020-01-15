import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SocialMediaPageRoutingModule } from './social-media-routing.module';
import { SocialMediaPage } from './social-media.page';
import { HomePageModule } from "../home/home.module";
let SocialMediaPageModule = class SocialMediaPageModule {
};
SocialMediaPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            SocialMediaPageRoutingModule,
            HomePageModule
        ],
        declarations: [SocialMediaPage]
    })
], SocialMediaPageModule);
export { SocialMediaPageModule };
//# sourceMappingURL=social-media.module.js.map