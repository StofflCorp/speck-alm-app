import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { YardStorePageRoutingModule } from './yard-store-routing.module';
import { YardStorePage } from './yard-store.page';
let YardStorePageModule = class YardStorePageModule {
};
YardStorePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            YardStorePageRoutingModule
        ],
        declarations: [YardStorePage]
    })
], YardStorePageModule);
export { YardStorePageModule };
//# sourceMappingURL=yard-store.module.js.map