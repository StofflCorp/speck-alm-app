import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InfoPageRoutingModule } from './info-routing.module';
import { InfoPage } from './info.page';
import { HomePageModule } from "../home/home.module";
let InfoPageModule = class InfoPageModule {
};
InfoPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            InfoPageRoutingModule,
            HomePageModule
        ],
        declarations: [InfoPage]
    })
], InfoPageModule);
export { InfoPageModule };
//# sourceMappingURL=info.module.js.map